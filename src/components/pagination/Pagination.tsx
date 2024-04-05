import React from "react";
import { switchOrgDropDown } from "../../assets";
import "./Pagination.scss";

type PaginationProps = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  paginateNext: () => void;
  paginatePrev: () => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  paginateNext,
  paginatePrev,
}) => {
  // Calculate total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination-container">
      <div className="pagination-container__showing">
        <span>Showing</span>
        <button type="button">
          {itemsPerPage} <img src={switchOrgDropDown} alt="drop down" />
        </button>
        <span>out of {totalItems}</span>
      </div>
      <div className="pagination-container__switch-page">
        <button onClick={paginatePrev} disabled={currentPage === 1}>
          {"<"}
        </button>
        <p>
          {currentPage} of {totalPages}
        </p>
        <button onClick={paginateNext} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
