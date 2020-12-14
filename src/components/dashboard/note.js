import React from "react";

//TODO: make different colors of the notes

export default function Note({ data }) {
  return (
    <div className="shadow-md m-4 rounded border-2 border-red-400 bg-red-100">
      <div className="p-2 text-lg">{data.title}</div>
      <div className="p-2">
        <div>{data.date}</div>
        <div>{data.content}</div>
      </div>
    </div>
  );
}
