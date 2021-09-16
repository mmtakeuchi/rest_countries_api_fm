import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { ThemeContext } from "../../theme-context";
import "./FilterButton.scss";

const FilterButton = ({ filterCountries }) => {
  const theme = useContext(ThemeContext);
  const history = useHistory();
  const [selection, setSelection] = useState("");

  const handleFilter = (e) => {
    setSelection(e.target.value);
    if (e.target.value !== "") {
      filterCountries(e.target.value);
      history.push(`/filter/${e.target.value}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form className="filter">
      <select
        name="regions"
        className={theme === "light" ? "regionFilter" : " darkFilter"}
        value={selection}
        onChange={handleFilter}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default FilterButton;
