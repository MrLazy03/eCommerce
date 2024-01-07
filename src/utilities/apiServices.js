import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppConstants, {baseUrl} from './AppConstants';

const makeAPIRequest = async (
  method,
  url,
  data = null,
  contentType = 'application/json',
) => {
  const headers = {'Content-Type': contentType};

  // Check if a token is present in AsyncStorage
  const token = await AsyncStorage.getItem('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    const response = await axios({
      method,
      url,
      data: ['get', 'delete'].includes(method) ? null : data,
      headers,
      responseType: 'json',
    });
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw new Error('Server Error');
    }
    throw error;
  }
};

export default makeAPIRequest;
