import React, { useState, useEffect } from "react";
import CalendarDates from "calendar-dates";
import CalendarDay from "./calendarDay";

export default function Month({}) {
  const [calendar, setCalendar] = useState([]);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(0);

  useEffect(() => {
    getDates();
  }, []);

  const getDates = async () => {
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    setYear(year);
    setMonth(monthNames[month]);

    const calendarDates = new CalendarDates();
    date = new Date(year, month);
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
        <span className="text-xl border-b-2">{month} {year}</span>
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
        {/*TODO: make callendar form the calendar-dates */}
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
                      <CalendarDay item={item}/>
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
