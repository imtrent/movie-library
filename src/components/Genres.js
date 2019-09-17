import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getGenres, setSelected } from './../actions/genres';

const Genres = props => {
    const loadGenres = () => {
        props.getGenres();
    };

    const setNewGenre = e => {
        props.setSelectedGenre(e.target.dataset.genre, e.target.dataset.id);
    };

    useEffect(() => {
        loadGenres();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ul className="categories">
            {props.genres.genres.map((genre, i) => (
                <li key={`${genre}-${i}`} onClick={setNewGenre}>
                    <NavLink
                        to={`/genre/${genre.name
                            .toLowerCase()
                            .replace(/ /g, '-')}`}
                        activeClassName="active"
                        key={genre.name.toLower}
                        data-genre={genre.name}
                        data-id={genre.id}
                    >
                        {genre.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = state => {
    return {
        genres: state.genres
    };
};

const mapDispatchToProps = dispatch => ({
    getGenres: () => dispatch(getGenres()),
    setSelectedGenre: (name, id) => dispatch(setSelected(name, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Genres);
