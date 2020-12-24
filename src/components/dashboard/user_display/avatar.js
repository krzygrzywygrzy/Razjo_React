import React from "react";

export default function Avatar({ label, active }) {
  let ring = "";
  if (active === true) {
    ring = "ring-gray-200 ring-2";
  }

  return (
    <div
      id="main"
      className={
        "bg-white w-12 h-12 rounded-full flex justify-center items-center shadow-inner mb-2 mx-2 cursor-pointer " +
        ring
      }
    >
      <span className="">{label}</span>
    </div>
  );
}
