import React, { useState } from "react";

function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  // in this function we use a variable to hold the value of the input so that our searchbar can be updated dynamically on input change for instance if we backspace it will update the search term to the text now displayed on the search bar
  function handleChange(e) {
    // state updates slowly so we need to use a variable to hold the value of the input while we wait for state to update
    const updatedSearchTerm = e.target.value;
    setSearchTerm(updatedSearchTerm);
    handleSearch(updatedSearchTerm);
    console.log(searchTerm);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
