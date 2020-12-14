import React from "react";
import CalendarDates from "calendar-dates";

export default function Calendar() {
  const calendarDates = new CalendarDates();
  const date = new Date();
  let calendar = calendarDates.getMatrix(date);
  console.log(calendar, date);

  //Names of days
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="text-white">
      {/* days names */}
      <div className="grid grid-cols-7">
        {dayNames.map((item) => {
          return (
            <div key={item} className="col-span-1 text-center">
              {item}
            </div>
          );
        })}
      </div>
      {/*Actual callendar */}
      <div className="grid grid-cols-7">
        {/*TODO: make callendar form the calendar-dates */}
      </div>
    </div>
  );
}
