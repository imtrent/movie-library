import React, { useState, useEffect, useReducer } from 'react';
import { getPopular } from './../api/APIUtils';
import Movies from './../components/Movies';
import Pagination from './../components/Pagination';

const MovieDashboard = () => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState('1');
    const [error, setError] = useState(false);
    const [totalPages, setTotalPages] = useState('');

    const init = page => {
        getPopular(page).then(data => {
            setMovieList(data.results);
            setPage(data.page);
            setTotalPages(data.total_pages);
        });
    };

    useEffect(() => {
        init(page);
    }, [page]);
    return (
        <div>
            <p>Movie Dashboard</p>
            <Movies movieList={movieList} />
            <Pagination page={page} totalPages={totalPages} />
        </div>
    );
};

export default MovieDashboard;
