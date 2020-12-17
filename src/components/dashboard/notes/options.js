import React, { useState } from "react";
import ColorPicker from "./colorPicker";

export default function NoteOptions({ color, changeColor }) {
  const colors = ["gray", "yellow", "blue", "red", "green", "pink"];
  let active = "bg-" + color + "-300 text-" + color + "-600";

  const [bold, setBold] = useState(false);
  let boldStyle = "";

  if (bold === true) {
    boldStyle = active;
  } else {
    boldStyle = "bg-white";
  }
  return (
    <div id="note">
      {/*colors*/}
      <div className="flex items-center">
        <div className="flex">
          {colors.map((item) => {
            return (
              <div key={item}>
                <ColorPicker
                  changeColor={changeColor}
                  color={item}
                  active={color}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
