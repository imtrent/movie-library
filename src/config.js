import axios from 'axios';

export const APIKey = process.env.REACT_APP_API_KEY;
export const APIUrl = process.env.REACT_APP_API_URL;
export const posterURL = 'http://image.tmdb.org/t/p/original';

export const API = axios.create({
    baseURL: APIUrl
});
