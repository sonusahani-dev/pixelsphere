export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(`http://localhost:3001/photographers/${id}`);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Photographer not found' });
    }

    const photographer = await response.json();
    return res.status(200).json(photographer);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
