import { API, APIKey } from './../config';

export const setGenres = payload => ({
    type: 'SET_GENRES',
    genres: payload
});

export const getGenres = () => async dispatch => {
    const res = await API.get(`/genre/movie/list${APIKey}`);
    dispatch(setGenres(res.data.genres));
};

export const setSelected = (name, id) => ({
    type: 'SET_SELECTED',
    selected: {
        name,
        id
    }
});
