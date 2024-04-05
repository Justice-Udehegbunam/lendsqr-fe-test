import React, { useState, useEffect } from "react";
import { filterResultsBtn, threeDotsIcon } from "../../assets";
import UserOptions from "../userOptions/UserOptions";
import "./Table.scss";
import Pagination from "../pagination/Pagination";

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
      } catch (error) {
        console.error("Error fetching data:", error);
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
      <div className="table__container">
        <table>
          <thead>
            <tr>
              <th>
                <span>Organization</span>
                <button>
                  <img src={filterResultsBtn} alt="filter results button" />
                </button>
              </th>
              <th>
                <span>Username</span>
                <button>
                  <img src={filterResultsBtn} alt="filter results button" />
                </button>
              </th>
              <th>
                <span>Email</span>
                <button>
                  <img src={filterResultsBtn} alt="filter results button" />
                </button>
              </th>
              <th>
                <span>Phone number</span>
                <button>
                  <img src={filterResultsBtn} alt="filter results button" />
                </button>
              </th>
              <th>
                <span>Date joined</span>
                <button>
                  <img src={filterResultsBtn} alt="filter results button" />
                </button>
              </th>
              <th>
                <span> Status</span>
                <button>
                  <img src={filterResultsBtn} alt="filter results button" />
                </button>
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
                  {hoveredRowIndex === index && showOptions && <UserOptions />}
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
    </div>
  );
};

export default Table;
