import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Countries.scss";
import CountryCard from "../CountryCard/CountryCard";
import SearchInput from "../SearchInput/SearchInput";

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
    const data = await axios
      .get(`${BASE_URL}/name/${query}`)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
    if (data) {
      setSearch(data);
      setCountries(data);
    }
  };

  useEffect(() => fetchCountries(), []);
  console.log(search);

  const setCountryCards = search.length
    ? search.map((country) => (
        <CountryCard
          country={country}
          key={country.numericCode}
          screen={screen}
        />
      ))
    : countries.map((country) => (
        <CountryCard
          country={country}
          key={country.numericCode}
          screen={screen}
        />
      ));

  return (
    <div className="countriesContainer">
      <SearchInput screen={screen} searchCountries={searchCountries} />
      {search.length ? (
        <div className="cardsContainer">{search && setCountryCards}</div>
      ) : (
        <div className="cardsContainer">{countries && setCountryCards}</div>
      )}
    </div>
  );
};

export default Countries;
