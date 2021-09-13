import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";

const App = () => {
  const [screen, setScreen] = useState(true);

  const toggleScreen = () => {
    setScreen(!screen);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Nav toggleScreen={toggleScreen} screen={screen} />
        <div className={screen ? "container day" : "container night"}>
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
  );
};

export default App;
