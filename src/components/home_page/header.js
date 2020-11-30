import React from "react";

export default function Header() {
  //TODO: #F87171 -> make this a bg color
  return (
    <div className="md: grid grid-cols-3">
      <div className=" md: col-span-2 flex bg-red-400 text-white p-4">
        <div className="flex flex-row items-baseline">
          <div className="ml-36 text-xl font-bold">Razjo</div>
          <div className="ml-4">about</div>
          <div></div>
        </div>
      </div>
      <div className="md: col-span-1 p-4 flex justify-end">
        <div className="mr-40 flex flex-row">
          <div className="text-gray-600">
            <a href="#">Sign in</a>
          </div>
          <div className="ml-4 ">
            <a href="#">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
