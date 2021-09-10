import React from "react";
import "./Nav.scss";

const Nav = ({ toggleScreen, screen }) => {
  return (
    <nav className={screen ? "light" : "dark"}>
      <span className="logo">Where in the World?</span>
      <button onClick={toggleScreen}>
        {screen ? (
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
    </nav>
  );
};

export default Nav;
