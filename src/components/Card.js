import React from 'react';
import { posterURL } from './../config';

const Card = ({ original_title, release_date, vote_average, poster_path }) => {
    return (
        <div className="card">
            <p>{original_title}</p>
            <img
                src={`${posterURL}/${poster_path}`}
                alt={`${original_title} movie poster`}
                width="100px"
            />
        </div>
    );
};

export default Card;
