import React from "react";
import ColorPicker from "./colorPicker";

export default function NoteOptions({ color, changeColor }) {
  const colors = ["gray", "red", "green", "pink"];

  return (
    <div>
      {/*colors*/}
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
  );
}
