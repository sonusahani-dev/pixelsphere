
export default async function handler(req, res) {
  try {
    const response = await fetch('https://pixels-api-3.onrender.com/photographers');

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch photographers' });
    }

    const photographers = await response.json();
    return res.status(200).json(photographers);

  } catch (error) {
    console.error('API Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
