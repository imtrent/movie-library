import React from 'react';
import { NavLink } from 'react-router-dom';
import Genres from './Genres';

const Navigation = props => {
    let genre = window.location.pathname.includes('genre');
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <NavLink to="/browse/popular" activeClassName="active">
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/browse/top-rated" activeClassName="active">
                        Top Rated
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/browse/upcoming" activeClassName="active">
                        Upcoming
                    </NavLink>
                </li>
                <li>
                    <p className={genre ? 'active' : null}>Genres</p>
                    <Genres />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
