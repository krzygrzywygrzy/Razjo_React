import React from "react";
import CalendarDates from "calendar-dates";

export default function Calendar() {
  const calendarDates = new CalendarDates();
  const date = new Date(2020, 11);
  let calendar = calendarDates.getMatrix(date);
  console.log(calendar);

  return (
    <div>
      <span>Callendar</span>
    </div>
  );
}
