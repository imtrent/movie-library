import { apiUrl, apiKey } from './../config';
require('dotenv').config();

export const getPopular = (page = '1') => {
    return fetch(`${apiUrl}/movie/popular${apiKey}&page=${page}`, {
        method: 'GET'
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};
