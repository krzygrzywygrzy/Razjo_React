import React from "react";

//TODO: make different colors of the notes

export default function Note({ data }) {
  return (
    <div className="shadow m-4 rounded-md border-t-2 border-b-2 border-l-4 border-r-2 border-red-400 bg-red-100">
      {/* Add border to kard */}
      <div className="p-2 text-lg">{data.title}</div>
      <div className="p-2">
        <div>{data.date}</div>
        <div>{data.content}</div>
      </div>
    </div>
  );
}
