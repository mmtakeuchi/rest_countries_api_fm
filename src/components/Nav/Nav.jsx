import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ toggleScreen, screen }) => {
  return (
    <nav className={screen ? "light" : "dark"}>
      <Link to="/" className="link">
        <span className="logo">Where in the World?</span>
      </Link>
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
