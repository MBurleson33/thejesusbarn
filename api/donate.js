import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, currency = 'usd', recurring, name, email } = req.body;

  if (!amount || amount < 100) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  try {
    if (recurring) {
      // Create a customer first for recurring
      const customer = await stripe.customers.create({ name, email });

      // Create a subscription price on the fly
      const price = await stripe.prices.create({
        currency,
        unit_amount: amount,
        recurring: { interval: 'month' },
        product_data: { name: 'The Jesus Barn Monthly Gift' },
      });

      // Create setup intent for recurring
      const setupIntent = await stripe.setupIntents.create({
        customer: customer.id,
        metadata: { price_id: price.id, name, email },
        automatic_payment_methods: { enabled: true },
      });

      return res.status(200).json({
        clientSecret: setupIntent.client_secret,
        type: 'setup',
        customerId: customer.id,
        priceId: price.id,
      });

    } else {
      // One-time payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        receipt_email: email,
        metadata: { name, email, type: 'one-time' },
        automatic_payment_methods: { enabled: true },
        description: 'The Jesus Barn — One-Time Gift',
      });

      return res.status(200).json({
        clientSecret: paymentIntent.client_secret,
        type: 'payment',
      });
    }
  } catch (err) {
    console.error('Stripe error:', err);
    return res.status(500).json({ error: err.message });
  }
}
