import React, { useState } from "react";

export default function Dashboard() {
  //dummy data, TODO: when api finished -> change
  //TODO: design in Adobe XD
  const [notes, setNotes] = useState(
    {
      content: "Lorem ipsum dolor sit amet.",
      date: Date.now(),
      key: 1,
    },
    {
      content: "Ut fermentum ullamcorper est, eget.",
      date: Date.now(),
      key: 2,
    }
  );
  return (
    <div className="grid md:grid-cols-4 ">
      <div className="md:col-span-1 bg-red-400 p-2">
        <div className="text-2xl text-white  ">Callendar</div>
      </div>
      <div className="md:col-span-3 p-2">
        <div className="flex flex-row justify-between">
          <div className="text-2xl text-gray-600">Notes</div>
          <div>Account</div>
        </div>
        {/*Display notes*/}
        <div></div>
      </div>
    </div>
  );
}
