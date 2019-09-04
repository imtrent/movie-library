import React from 'react';
import Card from './Card';

const Movies = ({ movieList }) => {
    return (
        <div className="movies">
            {movieList.map((movie, index) => (
                <Card key={`movie-${index}`} {...movie} />
            ))}
        </div>
    );
};

export default Movies;
