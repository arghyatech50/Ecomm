import { useState } from "react";
import "./Search.css";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="search-container">
      <h1 className="page-title">Search Products</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Search for items..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <p className="search-text">Showing results for: <strong>{query}</strong></p>
    </div>
  );
}

export default Search;
