import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="grid lg:grid-cols-3">
      <div className=" lg:col-span-2 flex bg-red-400 text-white p-4">
        <div className="flex flex-row items-baseline">
          <div className="lg:ml-36 text-xl font-bold">Razjo</div>
          <div className="ml-4">about</div>
          <div className="lg:hidden flex">
            <div className="pl-4">
              <Link to="/signin">Sign in</Link>
            </div>
            <div className="pl-4">
              <Link to="/login">Log in</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 lg:flex hidden p-4  justify-end">
        <div className="mr-40 flex flex-row">
          <div className="text-gray-600">
            <Link to="/signin">Sign in</Link>
          </div>
          <div className="ml-4">
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
