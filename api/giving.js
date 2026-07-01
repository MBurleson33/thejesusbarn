import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const payments = await stripe.paymentIntents.list({ limit: 100 });

    const donations = payments.data
      .filter(p => p.status === 'succeeded')
      .map(p => ({
        id: p.id,
        amount: p.amount / 100,
        name: p.metadata.name || 'Anonymous',
        email: p.metadata.email || '',
        designation: p.metadata.designation || 'barn',
        date: new Date(p.created * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        recurring: p.metadata.type === 'recurring'
      }));

    const barnTotal = donations.filter(d => d.designation !== 'need').reduce((s, d) => s + d.amount, 0);
    const needTotal = donations.filter(d => d.designation === 'need').reduce((s, d) => s + d.amount, 0);
    const barnCount = donations.filter(d => d.designation !== 'need').length;
    const needCount = donations.filter(d => d.designation === 'need').length;

    res.status(200).json({ donations, barnTotal, needTotal, barnCount, needCount });
  } catch(err) {
    console.error('Stripe list error:', err);
    res.status(500).json({ error: err.message });
  }
}
