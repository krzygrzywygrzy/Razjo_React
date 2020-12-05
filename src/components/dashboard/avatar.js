import React from "react";

export default function Avatar({ label }) {
  return (
    <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center shadow-inner mb-2 cursor-pointer">
      <span className="">{label}</span>
    </div>
  );
}
