import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSearch } from './../actions/movies';
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
