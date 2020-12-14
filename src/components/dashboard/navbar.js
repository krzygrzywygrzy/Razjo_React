import React from "react";
import Avatar from "./avatar";
import { FaBell } from "react-icons/fa";
import Searchbar from "./searchbar";

export default function Navbar() {
  return (
    <div className="border-b-2 lg:mb-2">
      <div className="flex flex-row items-center justify-between">
        {/* welcome message */}
        <div className="pl-4 text-2xl font-light ">Razjo</div>
        {/* searchbar -> shown only on the large screen */}
        <div className="hidden lg:block w-4/6 lg:flex lg:justify-center">
          <Searchbar />
        </div>
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
