import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { getGenres, getGenre } from './../api/APIUtils';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Genre = props => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const type = '18';
    const page = queryString.parse(props.location.search).page || 1;

    const loadGenres = () => {
        getGenres()
            .then(res => {
                setGenres(res.data);
            })
            .catch(err => {
                setError(true);
            });
    };

    const loadMovies = (type, page) => {
        getGenre(type, page)
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => {
                setError(true);
            });
    };

    useEffect(() => {
        loadGenres();
        loadMovies(type, page);
    }, [window.location.search, type]);

    return (
        <div className="content">
            <h1>{props.match.params.type.replace(/-/g, ' ')}</h1>
            <MovieList movies={movies} />
            <Pagination page={movies.page} totalPages={movies.total_pages} />
        </div>
    );
};

export default Genre;
