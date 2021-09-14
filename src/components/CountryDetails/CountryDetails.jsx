import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import "./CountryDetails.scss";

const CountryDetails = ({ screen }) => {
  const location = useLocation();
  const history = useHistory();
  const [country, setCountry] = useState({});
  const countryId = location.pathname.split("/")[2];
  console.log(country);

  const fetchCountry = async (id) => {
    const data = await axios
      .get(`https://restcountries.eu/rest/v2/alpha/${id}`)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
    if (data) {
      setCountry(data);
    }
  };

  const formatList = (list) => list.map((item) => item.name).join(", ");

  const getBorderCountries = (countries) =>
    countries.map((country) => country).join(", ");

  useEffect(() => fetchCountry(countryId), [countryId]);

  return (
    <div className="countryContainer">
      <button
        className={screen ? "backBtn" : "back dark"}
        onClick={() => history.push("/")}
      >
        <ion-icon name="arrow-back-outline"></ion-icon> Back
      </button>

      <div className={screen ? "country light" : "country night"}>
        <img src={country.flag} alt={country.name} />

        <div className="countryInfo">
          <p className="countryName">{country.name}</p>
          <div className="countryStats">
            <div className="row">
              <p>
                Native Name: <span className="stat">{country.nativeName}</span>
              </p>
              <p>
                Population: <span className="stat">{country.population}</span>
              </p>
              <p>
                Region: <span className="stat">{country.region}</span>
              </p>
              <p>
                Sub Region: <span className="stat">{country.subregion}</span>
              </p>
              <p>
                Capital: <span className="stat">{country.capital}</span>
              </p>
            </div>
            <div className="row">
              <p>
                Top Level Domain:
                <span className="stat">{country.topLevelDomain}</span>
              </p>
              <p>
                {country.currencies && country.currencies.length > 1
                  ? "Currencies"
                  : "Currency"}
                :
                <span className="stat">
                  {country.currencies && formatList(country.currencies)}
                </span>
              </p>
              <p>
                {country.languages && country.languages.length > 1
                  ? "Languages"
                  : "Language"}
                :
                <span className="stat">
                  {country.languages && formatList(country.languages)}
                </span>
              </p>
            </div>
          </div>
          <div className="borderCountries">
            Border Countries:
            <span className="stat">
              {country.borders && getBorderCountries(country.borders)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
