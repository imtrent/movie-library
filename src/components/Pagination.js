import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ page = '1', totalPages, type = 'popular' }) => {
    // Turn page string into number
    const pageNum = page * 1;

    return (
        <div className="pagination">
            <p>{page}</p>
            <p>{totalPages}</p>
            {page === 1 || page === 0 ? null : (
                <Link to={`/category/${type}?page=${pageNum - 1}`}>
                    Page {pageNum - 1}
                </Link>
            )}
            {page === totalPages ? null : (
                <Link to={`/category/${type}?page=${pageNum + 1}`}>
                    Page {pageNum + 1}
                </Link>
            )}
        </div>
    );
};

export default Pagination;
