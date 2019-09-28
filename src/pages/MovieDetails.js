import React, { useState, useEffect } from 'react';
import { posterURL } from './../config';
import { getSingleMovie, getRecommended } from '../api/APIUtils';
import MovieList from './../components/MovieList.js';

const MovieDetails = props => {
    const movieId = props.match.params.id;
    const [movie, setMovie] = useState([]);
    const [recommended, setRecommended] = useState([]);
    const [trailer, setTrailer] = useState('');
    const [loading, setLoading] = useState(true);

    const loadMovie = id => {
        getSingleMovie(id).then(res => {
            setMovie(res);
            if (res.videos.results.length !== 0) {
                setTrailer(res.videos.results[0].key);
            }
            setLoading(false);
        });
    };

    const loadRecommended = id => {
        getRecommended(id).then(res => {
            setRecommended(res);
        });
    };

    useEffect(() => {
        loadMovie(movieId);
        loadRecommended(movieId);
    }, [movieId]);

    // Get year from movie release date
    let release = movie.release_date;
    release = new Date(release).getFullYear();

    // Convert minutes to h:m
    let runtime = movie.runtime;
    runtime = Math.floor(runtime / 60) + 'h ' + (runtime % 60) + 'm';

    // If data is loading, render the loading component
    if (loading) {
        return 'is loading';
    }

    return (
        <div className="movie-details">
            <div className="row">
                <div className="column flex-4">
                    {movie.poster_path ? (
                        <img
                            src={`${posterURL}/${movie.poster_path}`}
                            alt={`${movie.original_title} poster`}
                        />
                    ) : (
                        <img src="/images/poster.png" alt={`poster`} />
                    )}
                </div>
                <div className="column flex-8">
                    <h1>
                        {movie.original_title}{' '}
                        {movie.release_date ? '(' + release + ')' : null}
                    </h1>
                    <div className="info">
                        <p>Runtime: {runtime}</p>
                        <p>
                            Genres:{' '}
                            {movie.genres.map(genre => (
                                <p>{genre.name},</p>
                            ))}
                        </p>
                    </div>
                    <p className="description">{movie.overview}</p>
                    {trailer ? (
                        <a
                            href={`https://www.youtube.com/watch?v=${trailer}`}
                            target="_blank"
                            className="button flex"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="14"
                                fill="none"
                                viewBox="0 0 13 14"
                            >
                                <path
                                    fill="#fff"
                                    d="M12.6 6.4L1.1.1C.6-.2 0 0 0 .7v12.6c0 .5.6.9 1 .6l11.6-6.3c.5-.3.5-1 0-1.2z"
                                />
                            </svg>
                            View Trailer
                        </a>
                    ) : null}
                </div>
            </div>
            <div className="recommended">
                <h2>Recommended Movies</h2>
                {recommended.results === undefined ||
                recommended.results.length !== 0 ? (
                    <MovieList movies={recommended} />
                ) : (
                    <p>
                        There are no recommendations based on the movie{' '}
                        {movie.original_title}
                    </p>
                )}
            </div>
        </div>
    );
};

export default MovieDetails;
