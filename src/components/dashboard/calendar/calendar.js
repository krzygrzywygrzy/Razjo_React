import React from "react";
import Month from "./month";

function Calendar() {
  let dates = [];

  let date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  dates.push({ year, month });

  for (let i = 0; i <= 2; i++) {
    let y, m;
    if (dates[dates.length - 1].month === 11) {
      m = 0;
      y = dates[dates.length - 1].year + 1;
    } else {
      m = dates[dates.length - 1].month + 1;
      y = dates[dates.length - 1].year;
    }
    dates.push({ year: y, month: m });
  }
  
  return (
    <div>
      <div>
        <Month month={dates[0].month} year={dates[0].year} />
      </div>
      <div className="hidden lg:block">
        <Month month={dates[1].month} year={dates[1].year} />
      </div>
      <div className="hidden lg:block">
        <Month month={dates[2].month} year={dates[2].year} />
      </div>
      <div className="hidden lg:block" >
        <Month month={dates[3].month} year={dates[3].year}/>
      </div>
    </div>
  );
}

export default Calendar;
