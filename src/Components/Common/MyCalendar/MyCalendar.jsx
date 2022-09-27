import React, { useState } from "react";
import { MyCalendarPicker } from "./Style";
import moment from "moment";

const MyCalendar = () => {
  const [date, setDate] = useState(moment());

  return (
    <MyCalendarPicker
      date={date}
      onChange={(newDate) => {
        setDate(newDate);
      }}
    />
  );
};

export default MyCalendar;
