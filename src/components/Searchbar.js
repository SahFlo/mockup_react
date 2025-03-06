import React, { useState } from "react";
import "./../styles/_searchbar.scss";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Recherche pour:", query);
    // Ici, vous pouvez implémenter la logique de recherche réelle
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Rechercher..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default Searchbar;