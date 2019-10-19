import React from 'react';

const Cast = ({ cast }) => {
    return (
        <div>
            {cast.map((cast, index) => (
                <p key={index}>{cast.name}</p>
            ))}
        </div>
    );
};

export default Cast;
