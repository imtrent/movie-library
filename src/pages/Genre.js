import React, { useEffect } from 'react';
import queryString from 'query-string';
import MovieList from '../components/MovieList';
import Pagination from './../components/Pagination';
import { getGenre } from '../actions/movies';

const Genre = props => {
    const genre = props.match.params.type;

    return (
        <div className="wrapper content">
            <h1>{genre}</h1>
            <MovieList />
        </div>
    );
};

export default Genre;
