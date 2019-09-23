import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getGenres } from './../api/APIUtils';

const Genres = props => {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadGenres = () => {
        getGenres().then(res => {
            setGenres(res.data);
            setLoading(false);
        });
    };

    useEffect(() => {
        loadGenres();
    }, []);

    if (loading) {
        return 'loading';
    }

    return (
        <ul className="categories">
            {genres.genres.map((genre, i) => (
                <li key={`${genre}-${i}`}>
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

export default Genres;
