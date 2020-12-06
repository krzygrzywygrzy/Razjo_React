import React from "react";
import Avatar from "./avatar";

export default function Navbar() {
  return (
    <div className="border-b-2 mb-2">
      <div className="flex flex-row items-center justify-between">
        {/* welcome message */}
        <div className="pl-4">Welcome back on December 6th!</div>
        {/* account and notifications */}
        <div className="pt-2 pr-4 flex justify-end items-center">
         
          <Avatar label="JD" />
        </div>
      </div>
    </div>
  );
}