import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../api/APIUtils';
import Genres from './Genres';

const Navigation = () => {
    const [genreList, setGenreList] = useState([]);
    const [active, setActive] = useState('popular');

    const loadCategories = () => {
        getCategories().then(data => {
            setGenreList(data.genres);
        });
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const handleChange = () => {};

    return (
        <header>
            <h1>Moviac</h1>
            <div className="group">
                <h4>Discover</h4>
                <ul className="nav-list">
                    <li className={active === 'popular' ? 'active' : null}>
                        <Link to="/popular">Popular</Link>
                    </li>
                    <li className={active === 'latest' ? 'active' : null}>
                        <Link to="/latest">Latest</Link>
                    </li>
                    <li className={active === 'upcoming' ? 'active' : null}>
                        <Link to="/upcoming">Upcoming</Link>
                    </li>
                </ul>
            </div>
            <div className="group">
                <h4>GENRES</h4>
                <Genres genreList={genreList} />
            </div>
        </header>
    );
};

export default Navigation;
