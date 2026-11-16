import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '58667936-0a175ba409d207fa6a1141374';

export function getImagesByQuery(query) {
   return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    }).then(response => response.data);
}