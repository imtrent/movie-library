import React from 'react';
import { Link } from 'react-router-dom';

const Genres = ({ genreList }) => {
    return (
        <ul className="categories">
            {genreList.map((genre, i) => (
                <li>
                    <Link
                        // to={`/genre/${genre.name.toLowerCase()}`}
                        key={genre.name.toLower}
                    >
                        {genre.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Genres;
