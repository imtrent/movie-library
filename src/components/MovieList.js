import React from 'react';
import Card from './Card';

export const MovieList = ({ movies }) => {
    if (!movies || movies.results === undefined) {
        return null;
    }
    return (
        <main className="movies-wrapper">
            {movies.results.map(movie => {
                return <Card key={movie.id} {...movie} />;
            })}
        </main>
    );
};

export default MovieList;
