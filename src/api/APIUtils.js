import { apiUrl, apiKey } from './../config';
require('dotenv').config();

export const getCategories = () => {
    return fetch(`${apiUrl}/genre/movie/list${apiKey}`, {
        method: 'GET'
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};

export const getMovies = (type = 'popular', page = '1') => {
    return fetch(`${apiUrl}/movie/${type}${apiKey}&page=${page}`, {
        method: 'GET'
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};

export const getSingleMovie = id => {
    return fetch(`${apiUrl}/movie/${id}${apiKey}`, {
        method: 'GET'
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};
