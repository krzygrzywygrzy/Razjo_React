import React from "react";

export default function HeroSection() {
  return (
    <div className="lg:grid grid-cols-3">
      <div className="lg:col-span-2  bg-red-400  text-white">
        <div className="lg:ml-40 lg:mt-72 ml-4 lg:text-6xl antialiased">The only solution</div>
        <div className="lg:ml-40 lg:mb-72 ml-4 lg:text-6xl antialiased">for your clinic</div>
      </div>
      <div className="lg:col-span-1 hidden lg:block">
          {/*Right side*/}
      </div>
    </div>
  );
}
