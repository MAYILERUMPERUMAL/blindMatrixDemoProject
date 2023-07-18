import axios from 'axios';

const BASE_URL = '';

const header = {
  header: {
    Authorization: 'Bearer',
  },
};

export const post = async (url, params) => {
  try {
    const response = await axios.post(url, params);
    console.log('2222222222222==========>', JSON.stringify(response));
    return response;
  } catch {
    return 'error';
  }
};
