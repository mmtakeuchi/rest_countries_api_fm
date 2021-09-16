import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { ThemeContext } from "./theme-context";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <div className="App">
          <Nav toggleTheme={toggleTheme} />
          <div className={`container ${theme === "light" ? "day" : "night"}`}>
            <Switch>
              <Route exact path="/">
                <Countries />
              </Route>
              <Route path="/search/:id">
                <Countries />
              </Route>
              <Route path="/filter/:id">
                <Countries />
              </Route>
              <Route path="/countries/:id">
                <CountryDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
