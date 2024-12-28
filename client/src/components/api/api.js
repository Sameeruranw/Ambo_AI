
import axios from 'axios';

const API_URL = 'http://localhost:5000/product';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL); 
    console.log('API Response:', response.data); 

  
    if (response.data && Array.isArray(response.data.aiSolutions)) {
      return response.data.aiSolutions; 
    } else {
      throw new Error('Invalid data format: Expected an array under "aiSolutions"');
    }
  } catch (error) {
    console.error('Error fetching data:', error); 
    throw error; 
  }
};
