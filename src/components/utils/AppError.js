import React from 'react';
import { Link } from 'react-router-dom';

const AppError = () => (
    <div className="app-error">
        <h1>Oh No!</h1>
        <p>It looks like something went wrong!</p>
        <Link to="/browse/popular" className="button">
            Go Home
        </Link>
    </div>
);

export default AppError;
