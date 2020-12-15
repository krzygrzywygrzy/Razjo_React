import React from "react";

export default function NewNote() {
  return (
    <div className="w-3/5 rounded ring-2 ring-gray-300 p-2">
      <input type="text" className="w-full focus:outline-none bg-gray-50"
        placeholder="type here..."
      />
    </div>
  );
}
