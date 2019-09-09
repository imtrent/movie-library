import React, { useState, useEffect } from 'react';
import { getSingleMovie } from '../api/APIUtils';

const MovieDetails = props => {
    const movieId = props.match.params.id;
    const [movie, setMovie] = useState([]);

    const loadMovie = id => {
        getSingleMovie(id).then(data => {
            setMovie(data);
        });
    };

    useEffect(() => {
        loadMovie(movieId);
    }, [movieId]);

    return (
        <div className="wrapper">
            <p>yo yo yo</p>
            {JSON.stringify(movie)}
        </div>
    );
};

export default MovieDetails;
