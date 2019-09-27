import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Search from './Search';

const Header = props => {
    return (
        <header>
            <Link to="/">
                <h1>
                    <span role="img" aria-label="Clapper Board">
                        🍿
                    </span>
                    MOVIAC
                </h1>
            </Link>
            <div className="right">
                <Navigation />
                <Search {...props} />
            </div>
            <div className="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    );
};

export default withRouter(Header);
