import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { getBrowse } from './../api/APIUtils';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Browse = props => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const type = props.match.params.type.replace(/-/g, '_');
    const page = queryString.parse(props.location.search).page || 1;

    const loadData = (type, page) => {
        getBrowse(type, page).then(res => {
            setMovies(res.data);
            setLoading(false);
        });
    };

    useEffect(() => {
        loadData(type, page);
    }, [window.location.search, type]);

    return (
        <div>
            <MovieList movies={movies} />
            <Pagination page={movies.page} totalPages={movies.total_pages} />
        </div>
    );
};

export default Browse;
