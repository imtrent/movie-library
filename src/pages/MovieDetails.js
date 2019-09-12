import React, { useState, useEffect } from 'react';
import { posterURL } from './../config';
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
            <div className="movie-details">
                <div
                    className="poster"
                    style={{
                        backgroundImage: `url(${posterURL}/${movie.poster_path})`
                    }}
                ></div>
                <div>
                    <h1>{movie.original_title}</h1>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
