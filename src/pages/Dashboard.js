import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { getMovies } from '../api/APIUtils';
import Movies from '../components/Movies';
import Pagination from '../components/Pagination';

const Dashboard = props => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState('1');
    const [totalPages, setTotalPages] = useState('');

    const type = props.match.params.type || 'popular';
    const queryVal = queryString.parse(props.location.search);
    const currPage = queryVal.page || 1;

    const loadMovies = (type, currPage) => {
        getMovies(type, currPage).then(data => {
            setMovieList(data.results);
        });
    };

    useEffect(() => {
        loadMovies(type, currPage);
    }, [currPage, type]);

    return (
        <div className="wrapper">
            <Movies movieList={movieList} />
            <Pagination page={page} totalPages={totalPages} />
        </div>
    );
};

export default Dashboard;
