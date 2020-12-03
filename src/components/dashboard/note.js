import React from "react";

export default function Note({ data }) {
  return (
    <div className="shadow p-4 m-4">
      <div>{data.title}</div>
      <div>{data.date}</div>
      <div>{data.content}</div>
    </div>
  );
}
