import axios from 'axios';

const API_BASE_URL = 'https://localhost:7035/api';

  export const getFilteredProducts = async (sort) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Products/filtered`, {
        params: { sort },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error.message);
      throw error;
    }
  };

  export const getSearchedProducts = async (search) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Products/search`, {
        params: { search },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error.message);
      throw error;
    }
  };

  export const getProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all products', error.message);
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