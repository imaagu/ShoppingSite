import React from "react";
import propTypes from "prop-types";
import _ from "lodash";
import "../css/page.css";
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log(currentPage);
  const pagesCount = itemsCount;
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <React.Fragment>
      {pages.map((page) => (
        <span
          key={page}
          className={page === currentPage ? "pagecss" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}&nbsp;&nbsp;
        </span>
      ))}
      {currentPage !== pagesCount ? (
        <a
          onClick={() => onPageChange(currentPage + 1)}
          className="text-primary"
        >
          Next{" "}
        </a>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};
export default Pagination;
