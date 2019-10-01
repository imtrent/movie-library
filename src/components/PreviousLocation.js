import React from 'react';
import { useHistory } from 'react-router-dom';

const PreviousLocation = () => {
    let lastLocation = useHistory();

    const handlePreviousLocation = () => {
        if (lastLocation.length !== 0) {
            console.log(lastLocation);
            lastLocation.goBack();
        }
    };

    return lastLocation.length ? (
        <div className="previous-location">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.2 477.2">
                <path d="M145.2 238.6L360.7 23c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0L116.5 229a13.5 13.5 0 0 0 0 19.2l225 225c2.7 2.6 6.2 4 9.6 4s6.9-1.3 9.5-4a13.5 13.5 0 0 0 0-19.1L145.2 238.6z" />
            </svg>

            <p onClick={handlePreviousLocation}>Go back</p>
        </div>
    ) : null;
};

export default PreviousLocation;
