import React, { useState } from "react";

export default function LogIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleHange = () => {};

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="bg-gray-50 flex flex-col  items-center h-screen">
      <div className="text-center text-4xl  p-16 text-red-400">Razjo</div>

      <div className="p-8 bg-white shadow-lg lg:w-3/12 w-10/12 rounded">
        <div className="text-center pb-8">Log in to Razjo</div>
        <div className="lg:mx-4 mx-2 pb-4">
          <input
            type="text"
            className="focus:outline-none w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className="lg:mx-4 mx-2 mb-4">
          <input
            type="text"
            className="focus:outline-none w-full"
            placeholder="Enter your password"
          />
        </div>
        <div
          onClick={handleSubmit}
          className="text-center bg-red-400 text-white p-2 mx-2 lg:mx-4 rounded shadow"
        >
          Log in
        </div>
      </div>
    </div>
  );
}
