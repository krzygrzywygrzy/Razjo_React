import React, { useState } from "react";
import "../../index.css";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="flex flex-row border-b-2">
      <div>
        <form>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="search"
            className="p-2 searchbar"
          />
        </form>
      </div>
    </div>
  );
}
