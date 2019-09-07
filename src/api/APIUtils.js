import { apiUrl, apiKey } from './../config';
require('dotenv').config();

export const getMovies = (type = 'popular', page = '1') => {
    return fetch(`${apiUrl}/movie/${type}${apiKey}&page=${page}`, {
        method: 'GET'
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};
