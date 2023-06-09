import React, { useState } from "react";
import "./Search.css";
const Search = (props) => {
  return (
    <div>
      <header className="header">
        <h1>Movies</h1>
        <form className="form">
          <input
            value={props.text}
            onChange={props.textHandler}
            type="text"
            className="search"
            placeholder="Search Movies"
          />
        </form>
        
      </header>
    </div>
  );
};

export default Search;
