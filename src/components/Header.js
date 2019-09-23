import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Search from './Search';

const Header = props => {
    return (
        <header>
            <Link to="/">
                <h1>MOVIAC</h1>
            </Link>
            <Search {...props} />
        </header>
    );
};

export default withRouter(Header);
