import React from 'react';

const Card = ({ original_title, release_date, vote_average, poster_path }) => {
    return (
        <div className="card">
            <p>{original_title}</p>
        </div>
    );
};

export default Card;
