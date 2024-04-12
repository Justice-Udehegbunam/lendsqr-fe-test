import React, { useState } from "react";
import "./FilterFields.scss";

type FilterFieldsProps = {
  onFilter: (filters: { org: string; status: string }) => void; // Callback for filter button click
  onReset: () => void; // Callback for reset button click
};

const FilterFields: React.FC<FilterFieldsProps> = ({ onFilter, onReset }) => {
  const [orgFilter, setOrgFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const handleFilter = () => {
    onFilter({ org: orgFilter, status: statusFilter });
  };

  const handleReset = () => {
    setOrgFilter("");
    setStatusFilter("");
    onReset();
  };

  return (
    <div className="custom-fields">
      <div className="align-top">
        <label htmlFor="companies-list" className="">
          Organization
        </label>
        <select
          name="list"
          id="companies-list"
          value={orgFilter}
          onChange={(e) => setOrgFilter(e.target.value)}
        >
          <option value="" disabled hidden>
            Select
          </option>
          <option value="irorun">Irorun</option>
          <option value="lendstar">Lendstar</option>
          <option value="lendsqr">Lendsqr</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="name">Username</label>
        <input type="text" name="name" id="name" placeholder="User" />
      </div>
      <div className="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="name" placeholder="Email" />
      </div>
      <div className="">
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" placeholder="date" />
      </div>
      <div className="">
        <label htmlFor="phone number">Phone Number</label>
        <input
          type="phone"
          name="phone number"
          id="phone number"
          placeholder="Phone Number"
        />
      </div>
      <div className="align-bottom">
        <label htmlFor="status" className="">
          Status
        </label>
        <select
          name="list"
          id="status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="" disabled hidden>
            Select
          </option>
          <option value="active">Active</option>
          <option value="blacklisted">Blacklisted</option>
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="buttons-container align-bottom">
        <button type="button" className="reset" onClick={handleReset}>
          Reset
        </button>
        <button type="button" className="filter" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterFields;
