import React, { useState, useEffect, useReducer } from 'react';
import { getPopular } from './../api/APIUtils';

const MovieDashboard = () => {
    const [movies, setMovies] = useState([]);

    const init = () => {
        getPopular().then(data => {
            setMovies(data);
        });
    };

    useEffect(() => {
        init();
    }, []);
    return (
        <div>
            <p>Movie Dashboard</p>
            {JSON.stringify(movies)}
        </div>
    );
};

export default MovieDashboard;
