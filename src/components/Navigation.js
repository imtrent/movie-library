import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Genres from './Genres';

const Navigation = ({ routeChange }) => {
    const [subMenuActive, setSubMenuActive] = useState(false);
    const location = useLocation();
    const isGenre = location.pathname.includes('genre');

    const toggleSubMenu = () => {
        setSubMenuActive(!subMenuActive);
    };

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
                    <p
                        className={isGenre ? 'active' : null}
                        onClick={toggleSubMenu}
                    >
                        Genre
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 477.175 477.175"
                        >
                            <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z" />
                        </svg>
                    </p>
                    <Genres
                        className={subMenuActive ? 'active' : ''}
                        toggleMenu={toggleSubMenu}
                        routeChange={routeChange}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
