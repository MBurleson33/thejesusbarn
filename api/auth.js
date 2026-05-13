export default function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  const correct = process.env.ADMIN_PASSWORD;

  if (!correct) {
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  if (password !== correct) {
    // Delay response slightly to slow brute force attempts
    return setTimeout(() => {
      res.status(401).json({ success: false });
    }, 500);
  }

  // Generate a simple session token — timestamp + secret hash
  const token = Buffer.from(
    `jb-${Date.now()}-${correct}-${process.env.TOKEN_SALT || 'jesusbarnsalt'}`
  ).toString('base64');

  return res.status(200).json({ success: true, token });
}
