import React from "react";
import ColorPicker from "./colorPicker";

export default function NoteOptions({ color, changeColor }) {
  const colors = ["gray", "yellow", "blue", "red", "green", "pink"];

  return (
    <div>
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
