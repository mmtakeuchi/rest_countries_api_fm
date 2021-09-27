import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import "./Countries.scss";
import CountryCard from "../CountryCard/CountryCard";
import SearchInput from "../SearchInput/SearchInput";
import FilterButton from "../FilterButton/FilterButton";

const BASE_URL = "https://restcountries.com/v2";

const Countries = () => {
  const location = useLocation();
  const history = useHistory();
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);
  const path = location.pathname.split("/");
  console.log(countries);
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
    setResults([]);
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
    setResults([]);
    if (selection !== "") {
      setResults(
        countries.filter((country) => country.continent === selection)
      );
    } else {
      history.push("/");
    }
  };

  useEffect(() => fetchCountries(), []);
  useEffect(() => {
    setResults([]);
    if (path[1] === "search") {
      searchCountries(path[2]);
    } else if (path[1] === "filter") {
      if (path[2] !== "") {
        filterCountries(path[2]);
      } else {
        history.push("/");
      }
    }
  }, [location.pathname]);

  const setCountryCards =
    countries &&
    countries.map((country) => (
      <CountryCard country={country} key={country.numericCode} />
    ));

  const setSearchCards =
    results &&
    results.map((country) => (
      <CountryCard country={country} key={country.numericCode} />
    ));

  return (
    <div className="countriesContainer">
      <div className="countriesHeader">
        <SearchInput searchCountries={searchCountries} />
        <FilterButton filterCountries={filterCountries} />
      </div>
      {location.pathname === "/" ? (
        <div className="cardsContainer">{countries && setCountryCards}</div>
      ) : (
        <div className="cardsContainer">{results && setSearchCards}</div>
      )}
    </div>
  );
};

export default Countries;
