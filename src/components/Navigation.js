import React from 'react';
import { NavLink } from 'react-router-dom';
// import Genres from './Genres';

const Navigation = props => {
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
            </ul>
            {/*<div className="group">
                <h4>Genres</h4>
                <Genres />
            </div>*/}
        </nav>
    );
};

export default Navigation;
