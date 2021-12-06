import React, { useContext } from "react";
import { ThemeContext } from "../../theme-context";
import { Link } from "react-router-dom";
import "./Attibution.scss";

const Attribution = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={`attribution ${theme === "light" ? "" : "dark"}`}>
      Challenge by{" "}
      <Link
        to="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
        className={`link ${theme === "light" ? "light" : "dark"}`}
      >
        Frontend Mentor
      </Link>
      . Coded by{" "}
      <Link
        to="https://github.com/mmtakeuchi/rest_countries_api_fm"
        target="_blank"
        rel="noreferrer"
        className={`link ${theme === "light" ? "light" : "dark"}`}
      >
        Michael Takeuchi
      </Link>
      .
    </div>
  );
};

export default Attribution;
