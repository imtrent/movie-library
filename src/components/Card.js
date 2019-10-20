import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { posterURL } from './../config';

const Card = ({
    original_title,
    release_date,
    vote_average,
    poster_path,
    id
}) => {
    const [loaded, setLoaded] = useState(false);

    let release = new Date(release_date);
    release = release.getFullYear();

    return (
        <div className="card">
            <Link to={`/movie/${id}`}>
                {poster_path ? (
                    <div
                        className={`poster ${
                            !loaded ? 'skeleton-image' : null
                        }`}
                        style={{
                            backgroundImage: `url(${posterURL}/${poster_path})`
                        }}
                    ></div>
                ) : (
                    <div
                        className="poster"
                        style={{
                            backgroundImage: `url('/images/poster.png')`
                        }}
                    ></div>
                )}
                <h3>{original_title}</h3>
                <div className="info">
                    <div className="rating">
                        <p>{vote_average}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 53.9 53.9"
                        >
                            <path
                                fill="#efce4a"
                                d="M27 1.3l8.3 16.9 18.6 2.7L40.4 34l3.2 18.5-16.7-8.7-16.6 8.7L13.5 34 0 21l18.6-2.7z"
                            />
                        </svg>
                    </div>
                    <p>{release ? release : 'Release N/A'}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;
