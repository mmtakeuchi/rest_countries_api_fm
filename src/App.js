import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const BASE_URL = "https://restcountries.eu/rest/v2";

const App = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const data = await axios
      .get(`${BASE_URL}/all`)
      .then((resp) => console.log(resp));
    console.log(data);
  };

  useEffect(() => fetchCountries(), []);

  return <div className="App">Countries</div>;
};

export default App;
