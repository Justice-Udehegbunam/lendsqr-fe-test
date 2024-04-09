import "./FilterFields.scss";

const FilterFields = () => {
  return (
    <div>
      <label htmlFor="list of companies" className="offScreen">
        Choose a car:
      </label>

      <div className="custom-select">
        <select name="cars" id="cars">
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="irorun">Irorun</option>
          <option value="lendstar">Lendstar</option>
          <option value="lendsqr">Lendsqr</option>
        </select>
      </div>
    </div>
  );
};

export default FilterFields;
