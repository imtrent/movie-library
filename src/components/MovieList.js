import React from 'react';
import Card from './Card';

export const MovieList = ({ movies }) => {
    if (!movies || movies.results === undefined) {
        return null;
    }
    return (
        <div className="movies-wrapper">
            {movies.results.map(movie => {
                return <Card key={movie.id} {...movie} />;
            })}
        </div>
    );
};

export default MovieList;
