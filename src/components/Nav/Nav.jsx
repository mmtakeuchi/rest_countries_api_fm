import React, { useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const [light, setLight] = useState(true);

  const toggleScreenMode = () => {
    setLight(!light);
  };

  return (
    <div className="nav">
      <span className="logo">Where in the World?</span>
      <button onClick={toggleScreenMode}>
        {light ? (
          <>
            <ion-icon name="moon-outline" className="moonIcon"></ion-icon>
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <ion-icon name="moon" className="moonIcon"></ion-icon>
            <span>Dark Mode</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Nav;
