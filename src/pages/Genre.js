import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import { getGenres, getGenre } from './../api/APIUtils';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Genre = props => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { type } = useParams();

    const genreType = type;
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

    const loadMovies = (genreType, page) => {
        getGenre(genreType, page)
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => {
                setError(true);
            });
    };

    useEffect(() => {
        loadGenres();
        loadMovies(genreType, page);
    }, [genreType, page]);

    return (
        <div className="wrapper">
            <div className="container">
                <div className="content">
                    <h1>{genreType.replace(/-/g, ' ')}</h1>
                    <p>Genre pages coming soon</p>
                    <MovieList movies={movies} />
                    <Pagination
                        page={movies.page}
                        totalPages={movies.total_pages}
                    />
                </div>
            </div>
        </div>
    );
};

export default Genre;
