import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBrowse } from '../actions/movies';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Browse = props => {
    const type = props.match.params.type;
    const page = '2';

    const loadData = (type, page) => {
        props.init(type, page);
    };

    useEffect(() => {
        loadData(type, page);
    }, [loadData, type]);

    return (
        <div className="wrapper">
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
