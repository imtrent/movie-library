import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getBrowse } from '../actions/movies';
import Navigation from '../components/Navigation';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Browse = props => {
    const type = props.match.params.type.replace(/-/g, '_');
    const page = queryString.parse(props.location.search).page || 1;

    const loadData = (type, page) => {
        props.init(type, page);
    };

    useEffect(() => {
        loadData(type, page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.search, type]);

    return (
        <div>
            <Navigation />
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
        movies: state.movies
    };
};

const mapDispatchToProps = dispatch => ({
    init: (type, page) => dispatch(getBrowse(type, page))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Browse);
