import axios from 'axios';

const BASE_URL = "https://pixels-api-3.onrender.com"; // ✅ Your live JSON API

export const fetchPhotographers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/photographers`);
    return res.data;
  } catch (error) {
    console.error('Error fetching photographers:', error.message);
    return [];
  }
};

export const fetchPhotographerById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/photographers/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching photographer with ID ${id}:`, error.message);
    return null;
  }
};

