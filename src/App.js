import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/Nav/Nav";

const BASE_URL = "https://restcountries.eu/rest/v2";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [screen, setScreen] = useState(true);

  const fetchCountries = async () => {
    const data = await axios
      .get(`${BASE_URL}/all`)
      .then((resp) => console.log(resp));
    console.log(data);
  };

  const toggleScreen = () => {
    setScreen(!screen);
  };

  useEffect(() => fetchCountries(), []);

  return (
    <div className="App">
      <Nav toggleScreen={toggleScreen} screen={screen} />
      Countries
    </div>
  );
};

export default App;
