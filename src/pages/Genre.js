import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getGenre } from '../actions/movies';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Genre = props => {
    const type = props.genres.selected.id;
    const page = queryString.parse(props.location.search).page || 1;

    const loadData = (type, page) => {
        props.init(type, page);
    };

    useEffect(() => {
        loadData(type, page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.search, type]);

    return (
        <div className="wrapper content">
            <h1>{props.match.params.type.replace(/-/g, ' ')}</h1>
            <MovieList movies={props.movies} />
            <Pagination
                page={props.movies.page}
                totalPages={props.movies.total_pages}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        movies: state.movies,
        genres: state.genres
    };
};

const mapDispatchToProps = dispatch => ({
    init: (type, page) => dispatch(getGenre(type, page))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Genre);
