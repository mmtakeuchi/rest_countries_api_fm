import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Countries.scss";
import CountryCard from "../CountryCard/CountryCard";

const BASE_URL = "https://restcountries.eu/rest/v2";

const Countries = ({ screen }) => {
  const [countries, setCountries] = useState([]);
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

  useEffect(() => fetchCountries(), []);

  const setCountryCards = countries.map((country) => (
    <CountryCard country={country} key={country.numericCode} screen={screen} />
  ));

  return (
    <div className="countriesContainer">{countries && setCountryCards}</div>
  );
};

export default Countries;
