import "./FilterFields.scss";

const FilterFields = () => {
  return (
    <div className="custom-fields">
      <div className="align-top">
        <label htmlFor="companies-list" className="">
          Organization
        </label>
        <select name="list" id="companies-list">
          <option value="" disabled selected hidden>
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
        <select name="list" id="status">
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="active">Active</option>
          <option value="blacklisted">Blacklisted</option>
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="buttons-container align-bottom">
        <button type="button" className="reset">
          Reset
        </button>
        <button type="button" className="filter">
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterFields;
