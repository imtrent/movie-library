import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ page, totalPages }) => {
    const url = window.location.pathname;

    return (
        <div className="pagination">
            {page === 1 || page === 0 ? null : (
                <Link to={`${url}?page=${page * 1 - 1}`} className="button">
                    Page {page * 1 - 1}
                </Link>
            )}
            {page === totalPages ? null : (
                <Link
                    to={`${url}?page=${page * 1 + 1}`}
                    className="button plus"
                >
                    Page {page * 1 + 1}
                </Link>
            )}
        </div>
    );
};

export default Pagination;
