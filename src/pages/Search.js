import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getSearch } from './../api/APIUtils';
import Loading from './../components/utils/Loading';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import AppError from './../components/utils/AppError';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { search } = useParams();
    const location = useLocation();

    /*
        1. Get the search request parameter
        2. Parse the page query, use 1 if page query not specified
    */
    const query = search;
    const page = queryString.parse(location.search).page || 1;

    const loadData = (query, page) => {
        getSearch(query, page)
            .then(res => {
                setMovies(res.data);
                setLoading(false);
                setError(false);
            })
            .catch(err => {
                setError(true);
            });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        loadData(query, page);
    }, [query, page]);

    if (loading) {
        return (
            <div className="wrapper">
                <Loading />
            </div>
        );
    }

    if (error) {
        return (
            <div className="wrapper">
                <AppError />
            </div>
        );
    }

    if (movies.results === undefined || movies.results.length === 0) {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="no-results">
                        <h1>Oh No!</h1>
                        <p>
                            It looks like there were no results found for{' '}
                            <strong>{query}</strong>
                        </p>
                        <a className="button" href="/">
                            Return Home
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="content">
                    <div className="heading">
                        <h1>{query}</h1>
                    </div>
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

export default Search;
