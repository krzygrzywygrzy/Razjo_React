import React from "react";

export default function HeroSection() {
  return (
    <div className="md:grid grid-cols-3">
      <div className="md:col-span-2  bg-red-400  text-white">
        <div className="ml-40 mt-72 text-6xl antialiased">The only solution</div>
        <div className="ml-40 mb-72 text-6xl antialiased">for your clinic</div>
      </div>
      <div className="md:col-span-1">
          {/*Right side*/}
      </div>
    </div>
  );
}
