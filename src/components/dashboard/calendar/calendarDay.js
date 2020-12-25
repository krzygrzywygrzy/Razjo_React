import React from "react";

export default function CalendarDay({ item }) {
  let label = "";
  let active = "bg-white rounded-full ";
  if (item.type === "current") {
    label = item.date;
  }

  return <span className={"p-1"}>{label}</span>;
}
