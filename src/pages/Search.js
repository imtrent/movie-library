import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { getSearch } from './../api/APIUtils';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Search = props => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const query = props.match.params.search;
    const page = queryString.parse(props.location.search).page || 1;

    const loadData = (type, page) => {
        getSearch(query, page)
            .then(res => {
                setMovies(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
            });
    };

    useEffect(() => {
        loadData(query, page);
    }, [query, page]);

    if (loading) {
        return <p>loading</p>;
    }

    if (movies.results === undefined || movies.results.length === 0) {
        return (
            <div class="no-results">
                <h2>Sorry!</h2>
                <p>It looks like there were no results found for {query}</p>
            </div>
        );
    }

    return (
        <div>
            <MovieList movies={movies} />
            <Pagination page={movies.page} totalPages={movies.total_pages} />
        </div>
    );
};

export default Search;
