import axios from 'axios';

const API_KEY = 's59p4VYm3Acb8z77Sa8gmjO2I2_fdyb757akeP_HzbE';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotos = async ({ request, page }) => {
  const config = {
    params: {
      client_id: API_KEY,
      query: request,
      page: page,
      per_page: 12,
      orientation: 'landscape',
    },
  };

  return axios.get('/photos', config);
};

export default fetchPhotos;
