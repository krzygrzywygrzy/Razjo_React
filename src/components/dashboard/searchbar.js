import React, { useState } from "react";
import "../../index.css";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  //TODO: make input

  return (
    <div className="flex flex-row  lg:w-3/5 w-4/5 p-2 ring-2 ring-gray-300 rounded bg-white shadow">
      <div className="w-full">
        <input
          type="text"
          placeholder="search..."
          className="w-full focus:outline-none"
        />
      </div>
    </div>
  );
}
