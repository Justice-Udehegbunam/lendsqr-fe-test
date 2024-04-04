import { tableData } from "../../constants";
import React, { useState } from "react";
import { filterResultsBtn, threeDotsIcon } from "../../assets";
import UserOptions from "../userOptions/UserOptions";
import "./Table.scss"; // Assuming you have defined styling for your table

type Status = {
  active: boolean;
  inactive: boolean;
  blacklisted: boolean;
  pending: boolean;
};

const Table: React.FC = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number>(-1);

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
    return ""; // Return default class or handle other cases
  };

  const getStatusText = (status: Status): string => {
    if (status.active) return "Active";
    if (status.blacklisted) return "Blacklisted";
    if (status.pending) return "Pending";
    if (status.inactive) return "Inactive";
    return ""; // Return default text or handle other cases
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
            {tableData.map((rowData, index) => (
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
    </div>
  );
};

export default Table;
