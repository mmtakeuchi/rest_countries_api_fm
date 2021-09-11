import React, { useState } from "react";
import "./SearchInput.scss";

const SearchInput = ({ screen, searchCountries }) => {
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchCountries(query);
  };

  return (
    <form
      className={screen ? "search searchLight" : "screen searchDark"}
      onSubmit={handleSearch}
    >
      <ion-icon name="search-outline" className="searchIcon"></ion-icon>
      <input
        type="text"
        value={query}
        onChange={handleInput}
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchInput;
