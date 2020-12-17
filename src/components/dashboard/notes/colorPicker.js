import React from "react";

export default function ColorPicker({ color, active, changeColor }) {
  let background = "bg-" + color + "-400 ";
  let outline = "";

  if (active === color) {
    outline = "ring-2 ring-" + color + "-600";
  }

  return (
    <div
      className={"p-2 mx-2 mt-1 rounded-full " + background + outline}
      onClick={() => {
        changeColor(color);
      }}
    ></div>
  );
}
