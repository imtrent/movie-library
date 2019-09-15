import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getSearch } from './../actions/movies';

const Header = props => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (value.length !== 0) {
            setError(false);
            props.history.push(`/search/${value}`);
            document.querySelector('input[name="search"]').value = '';
        } else {
            setError(true);
        }
    };

    return (
        <header>
            <Link to="/">
                <h1>MOVIAC</h1>
            </Link>
            <form id="search" onSubmit={handleSubmit}>
                <div className="input">
                    <input
                        type="text"
                        name="search"
                        aria-label="Search movies"
                        placeholder="Search movies..."
                        onChange={handleChange}
                    />
                    <button type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 451 451"
                        >
                            <path d="M447 428L337.6 318.4A192.5 192.5 0 0 0 192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0 0 19 0 13.5 13.5 0 0 0 0-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0 1 27 192.3z" />
                        </svg>
                    </button>
                </div>
            </form>
            {error ? 'error' : null}
        </header>
    );
};

export default withRouter(Header);
