import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import { getGenres, getGenre } from './../api/APIUtils';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import Loading from './../components/utils/Loading';
import AppError from './../components/utils/AppError';

const Genre = props => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { type } = useParams();

    const genreType = type.replace(/-/g, ' ');
    const page = queryString.parse(props.location.search).page || 1;

    const loadMovies = (genreType, page) => {
        getGenre(genreType, page)
            .then(res => {
                setMovies(res.data);
                setLoading(false);
                setError(false);
            })
            .catch(err => {
                setError(true);
            });
    };

    const getData = async () => {
        const genres = await getGenres();
        const requestedGenre = genres.data.genres.find(
            x => x.name.toUpperCase() === genreType.toUpperCase()
        );

        if (!requestedGenre || requestedGenre === undefined)
            return setError(true);

        loadMovies(requestedGenre.id, page);
    };

    useEffect(() => {
        getData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [genreType, page]);

    if (error) {
        return (
            <div className="wrapper">
                <AppError />
            </div>
        );
    }

    if (loading) {
        return (
            <div className="wrapper">
                <Loading />
            </div>
        );
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="content">
                    <div className="heading">
                        <h1>{genreType}</h1>
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

export default Genre;
