import React from "react";

export default function ColorPicker({ color, active, changeColor }) {
  let background = "bg-" + color + "-400";
  let outline = "";
  if (active === color) {
    outline = "ring-1 ring-gray-400";
  }

  console.log(changeColor);

  return (
    <div
      className={"p-2 mx-1 mt-1 rounded-full " + background}
      onClick={() => {
        changeColor(color);
      }}
    ></div>
  );
}
