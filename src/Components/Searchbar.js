import React from "react";
import "./searchbar.css";
const SearchBar = ({seachfield, searchChange}) => {
  return (
    <div className="pa2 tc">
      <input className="bar" type="search" placeholder="Search your friend" onChange={searchChange}></input>
    </div>
  );
};

export default SearchBar;
