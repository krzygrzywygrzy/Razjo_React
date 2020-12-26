import React, { useState, useEffect } from "react";
import CalendarDates from "calendar-dates";
import CalendarDay from "./calendarDay";

export default function Month({ month, year }) {
  const [calendar, setCalendar] = useState([]);
  const [m, setMonth] = useState("");
  const [y, setYear] = useState(0);

  useEffect(() => {
    getDates();
  }, []);

  const getDates = async () => {

    setYear(year);
    setMonth(monthNames[month]);

    const calendarDates = new CalendarDates();
    let date = new Date(year, month);
    let matrix = await calendarDates.getMatrix(date);
    setCalendar(matrix);
  };

  //Names of days
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="text-white">
      <div className="flex justify-center px-1 pt-1 pb-4">
        <span className="text-xl border-b-2">
          {m} {y}
        </span>
      </div>

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
      <div>
        {calendar.map((week, index) => {
          return (
            <div key={index}>
              <div className="grid grid-cols-7">
                {week.map((item) => {
                  return (
                    <div
                      key={item.iso}
                      className="col-span-1 flex justify-center"
                    >
                      <CalendarDay item={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
