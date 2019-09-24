import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Search from './Search';

const Header = props => {
    return (
        <header>
            <Link to="/">
                <h1>
                    MOVIAC{' '}
                    <span role="img" aria-label="Clapper Board">
                        🎬
                    </span>
                </h1>
            </Link>
            <div className="right">
                <Navigation />
                <Search {...props} />
            </div>
        </header>
    );
};

export default withRouter(Header);
