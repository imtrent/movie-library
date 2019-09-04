import React, { useState, useEffect, useReducer } from 'react';
import { getPopular } from './../api/APIUtils';
import Movies from './../components/Movies';

const MovieDashboard = () => {
    const [movieList, setMovieList] = useState([]);

    const init = () => {
        getPopular().then(data => {
            setMovieList(data.results);
        });
    };

    useEffect(() => {
        init();
    }, []);
    return (
        <div>
            <p>Movie Dashboard</p>
            <Movies movieList={movieList} />
        </div>
    );
};

export default MovieDashboard;
