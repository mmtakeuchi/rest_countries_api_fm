import React, { useState } from "react";
import "./CountryCard.scss";

const CountryCard = ({ country, screen }) => {
  return (
    <div className={screen ? "card light" : "card dark"}>
      <img src={country.flag} alt={country.name} />
      <div className="countryInfo">
        <p className="countryName">{country.name}</p>
        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
