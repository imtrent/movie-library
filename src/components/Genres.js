import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getGenres } from './../api/APIUtils';

const Genres = ({ className, toggleMenu, routeChange }) => {
    const [genres, setGenres] = useState([]);

    const loadGenres = () => {
        getGenres().then(res => {
            setGenres(res.data);
        });
    };

    useEffect(() => {
        loadGenres();
    }, []);

    return (
        <ul className={`categories ${className}`}>
            <li onClick={toggleMenu} className="back">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 477.175 477.175"
                >
                    <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z" />
                </svg>
                Back
            </li>
            {genres.genres &&
                genres.genres.map((genre, i) => (
                    <li key={`${genre}-${i}`}>
                        <NavLink
                            to={`/genre/${genre.name
                                .toLowerCase()
                                .replace(/ /g, '-')}`}
                            activeClassName="active"
                            key={genre.name.toLower}
                            data-genre={genre.name}
                            data-id={genre.id}
                            onClick={routeChange}
                        >
                            {genre.name}
                        </NavLink>
                    </li>
                ))}
        </ul>
    );
};

export default Genres;
