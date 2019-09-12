import React from 'react';
import { Link } from 'react-router-dom';
import { posterURL } from './../config';

const Card = ({
    original_title,
    release_date,
    vote_average,
    poster_path,
    id
}) => {
    let release = new Date(release_date);
    release = release.getFullYear();

    return (
        <div className="card">
            <Link to={`/movie/${id}`}>
                <div
                    style={{
                        backgroundImage: `url(${posterURL}/${poster_path})`
                    }}
                ></div>
                <h4>{original_title}</h4>
                <p>
                    {release} {vote_average}
                </p>
            </Link>
        </div>
    );
};

export default Card;
