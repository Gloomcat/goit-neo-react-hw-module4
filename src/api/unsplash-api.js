import axios from 'axios';

const API_KEY = 's59p4VYm3Acb8z77Sa8gmjO2I2_fdyb757akeP_HzbE';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotos = async ({ query, page, perPage }) => {
  const config = {
    params: {
      client_id: API_KEY,
      query: query,
      page: page,
      per_page: perPage,
    },
  };

  return axios.get('/search/photos', config);
};

export default fetchPhotos;
