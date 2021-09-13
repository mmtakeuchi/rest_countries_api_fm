import React, { useState } from "react";
import "./FilterButton.scss";

const FilterButton = ({ screen, filterCountries }) => {
  const [selection, setSelection] = useState("");

  const handleFilter = (e) => {
    setSelection(e.target.value);
    filterCountries(e.target.value);
  };

  return (
    <form className="filter">
      <select
        name="regions"
        className={screen ? "regionFilter" : " darkFilter"}
        value={selection}
        onChange={handleFilter}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default FilterButton;
