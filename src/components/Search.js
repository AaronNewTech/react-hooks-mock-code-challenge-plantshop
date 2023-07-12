import React, { useState } from "react";

function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    const updatedSearchTerm = e.target.value
    setSearchTerm(updatedSearchTerm)
    handleSearch(updatedSearchTerm)
    // console.log(searchTerm)
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
