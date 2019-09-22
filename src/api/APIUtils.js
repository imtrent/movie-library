import { API, APIUrl, APIKey } from './../config';
require('dotenv').config();

export const getCategories = async () => {
    try {
        const res = await fetch(`${APIUrl}/genre/movie/list${APIKey}`, {
            method: 'GET'
        });
        return res.json();
    } catch (err) {
        return console.log(err);
    }
};

export const getSingleMovie = async id => {
    try {
        const res = await API.get(`/movie/${id}${APIKey}`, {
            params: {
                append_to_response: 'videos'
            }
        });
        return res.data;
    } catch (err) {
        return console.log(err);
    }
};

export const getRecommended = async id => {
    try {
        const res = await API.get(`/movie/${id}/recommendations${APIKey}`);
        return res.data;
    } catch (err) {
        return console.log(err);
    }
};
