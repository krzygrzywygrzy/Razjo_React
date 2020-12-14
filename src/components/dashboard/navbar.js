import React from "react";
import Avatar from "./avatar";
import { FaBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="border-b-2 lg:mb-2">
      <div className="flex flex-row items-center justify-between">
        {/* welcome message */}
        <div className="pl-4 text-lg">Welcome back!</div>
        {/* account and notifications */}
        <div className="pt-2 pr-4 flex justify-end items-center">
          <div className="text-red-400 pr-2">
            <FaBell size={25} />
          </div>
          <Avatar label="JD" active={true} />
        </div>
      </div>
    </div>
  );
}
