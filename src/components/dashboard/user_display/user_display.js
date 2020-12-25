import React from "react";
import Avatar from "./avatar";

//TODO: update to display users from database

function UserDisplay() {
  return (
    <div className="flex flex-row lg:flex-col">
      <Avatar label="+" />
      <Avatar label="PP" />
      <Avatar label="JD" />
      <Avatar label="JP" />
      <Avatar label="KKK" />
    </div>
  );
}

export default UserDisplay;
