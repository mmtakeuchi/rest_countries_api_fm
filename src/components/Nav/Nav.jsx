import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../theme-context";
import "./Nav.scss";

const Nav = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  return (
    <nav className={theme === "light" ? "light" : "dark"}>
      <Link to="/" className="link">
        <span className="logo">Where in the World?</span>
      </Link>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
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
