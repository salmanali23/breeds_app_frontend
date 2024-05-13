import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const fetchAllBreeds = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/breeds`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createBreed = async (name) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/breeds`, { breed: { name} });
    return response.data;
  } catch (error) {
    throw error;
  }
};
