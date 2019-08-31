import { apiUrl, apiKey } from './../config';
require('dotenv').config();

export const getPopular = () => {
    return fetch(`${apiUrl}/movie/popular${apiKey}`, {
        method: 'GET'
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};
