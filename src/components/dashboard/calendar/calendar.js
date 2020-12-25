import React from "react";
import Month from "./month";

function Calendar() {
  let dates = [];

  let date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  dates.push({ year, month });

    //TODO: repair the for loop to make what it is supposed to make

  //   for (let i = 0; i <= 2; i++) {
  //     let d = dates[dates.length - 1];

  //     if (d.month === 11) {
  //       d.year += 1;
  //       d.month = 0;
  //     } else {
  //       d.month += 1;
  //     }

  //     dates.push({ year: d.year, month: d.month });
  //   }

  console.log(dates);

  return (
    <div>
      <div>
        <Month />
      </div>
      <div className="hidden lg:block">
        <Month />
      </div>
      <div className="hidden lg:block">
        <Month />
      </div>
      <div className="hidden lg:block">
        <Month />
      </div>
    </div>
  );
}

export default Calendar;
