import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getGenre } from './../actions/movies';

const Genres = props => {
    const listGenre = e => {
        props.getNewGenre(e.target.dataset.id);
    };

    return (
        <ul className="categories">
            {props.genreList.map((genre, i) => (
                <li key={`${genre}-${i}`} onClick={listGenre}>
                    <NavLink
                        to={`/genre/${genre.name
                            .toLowerCase()
                            .replace(/ /g, '-')}`}
                        activeClassName="active"
                        key={genre.name.toLower}
                        data-id={genre.id}
                    >
                        {genre.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

const mapDispatchToProps = dispatch => ({
    getNewGenre: id => dispatch(getGenre(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Genres);
