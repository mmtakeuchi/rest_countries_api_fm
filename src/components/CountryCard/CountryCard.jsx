import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../theme-context";
import "./CountryCard.scss";

const CountryCard = ({ country }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "card light" : "card dark"}>
      <Link
        to={`/countries/${country.alpha2Code.toLowerCase()}`}
        className="link"
      >
        <img src={country.flags[0]} alt={country.name} />
      </Link>
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
