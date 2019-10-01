import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Genres from './Genres';

const Navigation = ({ routeChange }) => {
    const location = useLocation();
    const isGenre = location.pathname.includes('genre');

    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <NavLink
                        to="/browse/popular"
                        activeClassName="active"
                        onClick={routeChange}
                    >
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/browse/top-rated"
                        activeClassName="active"
                        onClick={routeChange}
                    >
                        Top Rated
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/browse/upcoming"
                        activeClassName="active"
                        onClick={routeChange}
                    >
                        Upcoming
                    </NavLink>
                </li>
                <li>
                    <p className={isGenre ? 'active' : null}>Genre</p>
                    <Genres />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
