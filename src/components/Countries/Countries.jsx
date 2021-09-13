import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Countries.scss";
import CountryCard from "../CountryCard/CountryCard";
import SearchInput from "../SearchInput/SearchInput";
import FilterButton from "../FilterButton/FilterButton";

const BASE_URL = "https://restcountries.eu/rest/v2";

const Countries = ({ screen }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  console.log(countries);

  const fetchCountries = async () => {
    const data = await axios
      .get(`${BASE_URL}/all`)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
    if (data) {
      setCountries(data);
    }
  };

  const searchCountries = async (query) => {
    console.log(query === "");
    if (query !== "") {
      const data = await axios
        .get(`${BASE_URL}/name/${query}`)
        .then((resp) => resp.data)
        .catch((err) => console.log(err));
      if (data) {
        setSearch(data);
        setCountries(data);
      }
    } else {
      fetchCountries();
    }
  };

  const filterCountries = (selection) => {
    console.log(selection);
    console.log(countries.filter((country) => country.region === selection));
    fetchCountries();
    if (selection !== "") {
      setCountries(countries.filter((country) => country.region === selection));
    }
  };

  useEffect(() => fetchCountries(), []);
  console.log(countries);

  const setCountryCards = countries.map((country) => (
    <CountryCard country={country} key={country.numericCode} screen={screen} />
  ));

  return (
    <div className="countriesContainer">
      <div className="countriesHeader">
        <SearchInput screen={screen} searchCountries={searchCountries} />
        <FilterButton screen={screen} filterCountries={filterCountries} />
      </div>
      {/* {search ? (
        <div className="cardsContainer">{search && setCountryCards}</div>
      ) : (
        <div className="cardsContainer">{countries && setCountryCards}</div>
      )} */}
      {countries && <div className="cardsContainer">{setCountryCards}</div>}
    </div>
  );
};

export default Countries;
