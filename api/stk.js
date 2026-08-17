export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  const payload = req.body;
  if (!payload) {
    return res.status(400).json({ success: false, message: 'Invalid payload' });
  }

  try {
    const response = await fetch('https://megapay.co.ke/backend/v1/initiatestk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Origin': 'https://megapay.co.ke',
        'Referer': 'https://megapay.co.ke/'
      },
      body: typeof payload === 'string' ? payload : JSON.stringify(payload)
    });

    const data = await response.text();
    try {
      res.status(response.status).json(JSON.parse(data));
    } catch (e) {
      res.status(response.status).send(data);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
