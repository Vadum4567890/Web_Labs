import axios from 'axios';

const API_BASE_URL = 'https://localhost:7035/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by id:', error.message);
    throw error;
  }
};