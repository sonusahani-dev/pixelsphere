import axios from 'axios';

export const fetchPhotographers = async () => {
  try {
    const response = await axios.get('/api/photographers');
    return response.data;
  } catch (error) {
    console.error('Error fetching photographers:', error);
    return [];
  }
};

export const fetchPhotographerById = async (id) => {
  try {
    const response = await axios.get(`/api/photographers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching photographer with ID ${id}:`, error.response?.status, error.message);
    return null;
  }
};
