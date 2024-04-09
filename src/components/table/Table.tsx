import React, { useState, useEffect } from "react";
import { filterResultsBtn, threeDotsIcon } from "../../assets";
import UserOptions from "../userOptions/UserOptions";
import "./Table.scss";
import Pagination from "../pagination/Pagination";
import FilterFields from "../filterFields/FilterFields";

type Status = {
  active: boolean;
  inactive: boolean;
  blacklisted: boolean;
  pending: boolean;
};

type RowData = {
  org: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: Status;
};

const Table: React.FC = () => {
  const [tableData, setTableData] = useState<RowData[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(9);
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number>(-1);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [showFilter, setShowFilter] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/c7329d64-3189-46cf-ad62-4a83d8b529ec"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTableData(data);
        setLoading(false); // Update loading state after successful data fetch
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetchError("Failed to fetch table data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredRowIndex(index);
    setShowOptions(true);
  };

  const handleFilterButtonClick = (filterIndex: number) => {
    // Toggle the showFilter state
    setShowFilter((prevFilterIndex) =>
      prevFilterIndex === filterIndex ? null : filterIndex
    );
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(-1);
    setShowOptions(false);
  };

  const getStatusClassName = (status: Status): string => {
    if (status.active) return "active";
    if (status.blacklisted) return "blacklisted";
    if (status.pending) return "pending";
    if (status.inactive) return "inactive";
    return "";
  };

  const getStatusText = (status: Status): string => {
    if (status.active) return "Active";
    if (status.blacklisted) return "Blacklisted";
    if (status.pending) return "Pending";
    if (status.inactive) return "Inactive";
    return "";
  };

  return (
    <div className="table">
      {loading ? (
        <p>Loading...</p>
      ) : fetchError ? (
        <p className="error">{fetchError}</p>
      ) : (
        <>
          <div className="table__container">
            <table>
              <thead>
                <tr>
                  <th>
                    <span>Organization</span>
                    <button onClick={() => handleFilterButtonClick(1)}>
                      <img src={filterResultsBtn} alt="filter results button" />
                    </button>
                    {showFilter === 1 && <FilterFields />}
                  </th>
                  <th>
                    <span>Username</span>
                    <button onClick={() => handleFilterButtonClick(2)}>
                      <img src={filterResultsBtn} alt="filter results button" />
                    </button>
                    {showFilter === 2 && <FilterFields />}
                  </th>
                  <th>
                    <span>Email</span>
                    <button onClick={() => handleFilterButtonClick(3)}>
                      <img src={filterResultsBtn} alt="filter results button" />
                    </button>
                    {showFilter === 3 && <FilterFields />}
                  </th>
                  <th>
                    <span>Phone number</span>
                    <button onClick={() => handleFilterButtonClick(4)}>
                      <img src={filterResultsBtn} alt="filter results button" />
                    </button>
                    {showFilter === 4 && <FilterFields />}
                  </th>
                  <th>
                    <span>Date joined</span>
                    <button onClick={() => handleFilterButtonClick(5)}>
                      <img src={filterResultsBtn} alt="filter results button" />
                    </button>
                    {showFilter === 5 && <FilterFields />}
                  </th>
                  <th>
                    <span> Status</span>
                    <button onClick={() => handleFilterButtonClick(6)}>
                      <img src={filterResultsBtn} alt="filter results button" />
                    </button>
                    {showFilter === 6 && <FilterFields />}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((rowData, index) => (
                  <tr key={index}>
                    <td>{rowData.org}</td>
                    <td>{rowData.username}</td>
                    <td>{rowData.email}</td>
                    <td>{rowData.phoneNumber}</td>
                    <td>{rowData.dateJoined}</td>
                    <td>
                      <span className={getStatusClassName(rowData.status)}>
                        {getStatusText(rowData.status)}
                      </span>
                    </td>
                    <td
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button id="viewMore">
                        <img src={threeDotsIcon} alt="three dots" />
                      </button>
                      {hoveredRowIndex === index && showOptions && (
                        <UserOptions
                          userStatus={getStatusText(rowData.status)}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={tableData.length}
            paginateNext={paginateNext}
            paginatePrev={paginatePrev}
          />
        </>
      )}
    </div>
  );
};

export default Table;
