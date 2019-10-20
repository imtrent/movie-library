import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { getBrowse } from './../api/APIUtils';
import Loading from './../components/utils/Loading';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Browse = props => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const type = props.match.params.type.replace(/-/g, '_');
    const page = queryString.parse(props.location.search).page || 1;

    const typeFormatted = type.replace(/_/g, ' ');

    const loadData = (type, page) => {
        getBrowse(type, page).then(res => {
            setMovies(res.data);
            setLoading(false);
        });
    };

    useEffect(() => {
        loadData(type, page);
    }, [type, page]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="wrapper">
            <div className="container">
                <h2>{typeFormatted} Movies</h2>
                <h3 className="page-desc">
                    Browse thousands of {type.replace(/_/g, ' ')} movies through
                    TMDb API.
                </h3>
                <MovieList movies={movies} />
                <Pagination
                    page={movies.page}
                    totalPages={movies.total_pages}
                />
            </div>
        </div>
    );
};

export default Browse;
