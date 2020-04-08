import React from "react";
import { range } from "./../../services/rangeFunc";
import { PropTypes } from "prop-types";

const Pagination = ({
  movieCount,
  moviesPerPage,
  onPageChange,
  currentPage,
}) => {
  let pageArray = range(1, Math.ceil(movieCount / moviesPerPage));

  if (pageArray.length === 1) {
    return null;
  }

  return (
    <React.Fragment>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageArray.map((each) => (
            <li
              key={each}
              className={
                each === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(each)}>
                {each}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  movieCount: PropTypes.number.isRequired,
  moviesPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
