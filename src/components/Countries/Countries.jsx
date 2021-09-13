import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "./Countries.scss";
import CountryCard from "../CountryCard/CountryCard";
import SearchInput from "../SearchInput/SearchInput";
import FilterButton from "../FilterButton/FilterButton";

const BASE_URL = "https://restcountries.eu/rest/v2";

const Countries = ({ screen }) => {
  const location = useLocation();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const [filter, setFilter] = useState([]);
  const [results, setResults] = useState([]);
  const path = location.pathname.split("/");
  console.log(path);
  console.log(results);

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
    setFilter([]);
    console.log(query);
    if (query) {
      const data = await axios
        .get(`${BASE_URL}/name/${query}`)
        .then((resp) => resp.data)
        .catch((err) => console.log(err));
      if (data) {
        setResults(data);
      }
    } else {
      fetchCountries();
    }
  };

  const filterCountries = (selection) => {
    setSearch([]);
    setFilter(countries);
    if (selection !== "") {
      setResults(countries.filter((country) => country.region === selection));
    }
  };

  useEffect(() => {
    setSearch([]);
    if (path[2] === "search") {
      searchCountries(path[3]).then((data) => setResults(data));
    } else if (path[2] === "filter") {
      filterCountries(path[3]).then((data) => setResults(data));
    }
  }, [location.pathname]);
  useEffect(() => fetchCountries(), []);
  console.log(countries);

  const setCountryCards = countries.map((country) => (
    <CountryCard country={country} key={country.numericCode} screen={screen} />
  ));

  const setFilterCards =
    filter &&
    filter.map((country) => (
      <CountryCard
        country={country}
        key={country.numericCode}
        screen={screen}
      />
    ));

  const setSearchCards =
    results &&
    results.map((country) => (
      <CountryCard
        country={country}
        key={country.numericCode}
        screen={screen}
      />
    ));

  return (
    <div className="countriesContainer">
      <div className="countriesHeader">
        <SearchInput screen={screen} searchCountries={searchCountries} />
        <FilterButton screen={screen} filterCountries={filterCountries} />
      </div>
      {location.pathname === "/" ? (
        <div className="cardsContainer">{countries && setCountryCards}</div>
      ) : (
        <div className="cardsContainer">{results && setSearchCards}</div>
      )}
      {/* {filter.length ? (
        <div className="cardsContainer">{filter && setFilterCards}</div>
      ) : (
        <div className="cardsContainer">{countries && setCountryCards}</div>
      )}
      {search.length ? (
        <div className="cardsContainer">{search && setSearchCards}</div>
      ) : (
        <div className="cardsContainer">{countries && setCountryCards}</div>
      )} */}
      {/* {countries && <div className="cardsContainer">{setCountryCards}</div>} */}
    </div>
  );
};

export default Countries;
