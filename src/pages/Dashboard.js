import React, { useEffect } from 'react';
import MovieList from '../components/MovieList';
import { init } from '../actions/movies';

const Dashboard = () => {
    useEffect(() => {
        init();
    }, []);

    return (
        <div className="wrapper">
            <MovieList />
        </div>
    );
};

export default Dashboard;
