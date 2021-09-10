import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Countries from "./components/Countries/Countries";

const App = () => {
  const [screen, setScreen] = useState(true);

  const toggleScreen = () => {
    setScreen(!screen);
  };

  return (
    <div className="App">
      <Nav toggleScreen={toggleScreen} screen={screen} />
      <div className={screen ? "container day" : "container night"}>
        <Countries screen={screen} />
      </div>
    </div>
  );
};

export default App;
