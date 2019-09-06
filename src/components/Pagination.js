import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ page, totalPages, type = 'popular' }) => {
    return (
        <div className="pagination">
            <p>{page}</p>
            <p>{totalPages}</p>
            {page === 1 || page === 0 ? null : (
                <Link to={`/category/${type}?page=${page - 1}`}>
                    Page {page - 1}
                </Link>
            )}
            {page === totalPages ? null : (
                <Link to={`/category/${type}?page=${page + 1}`}>
                    Page {page + 1}
                </Link>
            )}
        </div>
    );
};

export default Pagination;
