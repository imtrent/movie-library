import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ page, totalPages }) => {
    return (
        <div className="pagination">
            {page === 1 || page === 0 ? null : (
                <Link className="button">Page {page - 1}</Link>
            )}
            {page === totalPages ? null : (
                <Link className="button">Page {page + 1}</Link>
            )}
        </div>
    );
};

export default Pagination;
