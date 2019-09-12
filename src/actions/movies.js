import { API, APIUrl, APIKey } from './../config';

export const setMovies = payload => ({
    type: 'SET_MOVIES',
    movies: payload
});

export const clearMovies = () => ({
    type: 'RESET_MOVIES',
    movies: []
});

export const init = () => async dispatch => {
    const res = await API.get(`/movie/popular${APIKey}`);
    dispatch(setMovies(res.data));
};

export const getGenre = id => async dispatch => {
    const res = await API.get(`/discover/movie${APIKey}&with_genres=${id}`);
    dispatch(setMovies(res.data));
};

export const getBrowse = (type, page = '1') => async dispatch => {
    const res = await API.get(`/movie/${type}${APIKey}`, {
        params: {
            page
        }
    });
    dispatch(setMovies(res.data));
};
