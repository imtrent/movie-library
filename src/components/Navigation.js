import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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

    const handleChange = e => {
        setActive(e.target.innerHTML.toLowerCase());
        console.log(active);
    };

    return (
        <header>
            <h1>
                <NavLink>Moviac</NavLink>
            </h1>
            <div className="group">
                <h4>Browse</h4>
                <ul className="nav-list">
                    <li>
                        <NavLink to="/popular" activeClassName="active">
                            Popular
                        </NavLink>
                    </li>
                    <li onClick={handleChange}>
                        <NavLink to="/latest" activeClassName="active">
                            Latest
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/upcoming" activeClassName="active">
                            Upcoming
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="group">
                <h4>Genres</h4>
                <Genres genreList={genreList} />
            </div>
        </header>
    );
};

export default Navigation;
