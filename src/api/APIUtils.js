import { API, APIKey } from './../config';
require('dotenv').config();

export const getGenres = async () => {
    const res = await API.get(`/genre/movie/list${APIKey}`);
    return res;
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
        return err;
    }
};

export const getCredits = async id => {
    try {
        const res = await API.get(`/movie/${id}/credits${APIKey}`);
        return res.data;
    } catch (err) {
        return err;
    }
};

export const getRecommended = async id => {
    try {
        const res = await API.get(`/movie/${id}/recommendations${APIKey}`);
        return res.data;
    } catch (err) {
        return err;
    }
};

export const getBrowse = async (type, page = '1') => {
    const res = await API.get(`/movie/${type}${APIKey}`, {
        params: {
            page
        }
    });
    return res;
};

export const getGenre = async (type, page = '1') => {
    const res = await API.get(`/discover/movie${APIKey}`, {
        params: {
            with_genres: type,
            page
        }
    });
    return res;
};

export const getSearch = async (search, page) => {
    const res = await API.get(`/search/movie${APIKey}`, {
        params: {
            query: search,
            page
        }
    });

    return res;
};
