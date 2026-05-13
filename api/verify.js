export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token } = req.body;
  const correct = process.env.ADMIN_PASSWORD;
  const salt = process.env.TOKEN_SALT || 'jesusbarnsalt';

  if (!token || !correct) {
    return res.status(401).json({ valid: false });
  }

  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    // Token format: jb-{timestamp}-{password}-{salt}
    const expected = `jb-`;
    const containsPassword = decoded.includes(`-${correct}-`);
    const containsSalt = decoded.includes(`-${salt}`);
    const parts = decoded.split('-');
    const timestamp = parseInt(parts[1]);
    const age = Date.now() - timestamp;
    const maxAge = 8 * 60 * 60 * 1000; // 8 hours

    if (containsPassword && containsSalt && age < maxAge) {
      return res.status(200).json({ valid: true });
    }
  } catch(e) {}

  return res.status(401).json({ valid: false });
}
