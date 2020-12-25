import React from "react";

export default function HeroSection() {
  return (
    <div className="lg:grid grid-cols-3">
      {/* Left Side */}
      <div className="lg:col-span-2 lg:py-72 bg-red-400  h-full  text-white">
        <div className="lg:ml-40  ml-4 lg:text-6xl antialiased">
          The only solution
        </div>
        <div className="lg:ml-40  ml-4 lg:text-6xl antialiased">
          for your clinic
        </div>
      </div>
      {/*Right side*/}
      <div className="lg:col-span-1 hidden lg:block"></div>
    </div>
  );
}
