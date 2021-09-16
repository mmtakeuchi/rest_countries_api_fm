import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { ThemeContext } from "./theme-context";

const App = () => {
  const [screen, setScreen] = useState(true);
  const [theme, setTheme] = useState(ThemeContext);
  console.log(theme);

  const toggleScreen = () => {
    setScreen(!screen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <div className="App">
          <Nav
            toggleScreen={toggleScreen}
            screen={screen}
            toggleTheme={toggleTheme}
          />
          {/* <div className={screen ? "container day" : "container night"}> */}
          <div className={`container ${theme}`}>
            <Switch>
              <Route exact path="/">
                <Countries screen={screen} />
              </Route>
              <Route path="/search/:id">
                <Countries screen={screen} />
              </Route>
              <Route path="/filter/:id">
                <Countries screen={screen} />
              </Route>
              <Route path="/countries/:id">
                <CountryDetails screen={screen} />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
