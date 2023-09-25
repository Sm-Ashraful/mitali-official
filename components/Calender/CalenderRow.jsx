import { useEffect, useState } from "react";

function CalendarRow({
  firstDay,
  lastDayInMonth,
  row,
  currentMonth,
  currentYear,
  selectedDate,
  onSelectedDate,
}) {
  const activeDay = useState(new Date().getDate())[0];
  // Calculate the date for today and the next three days
  const today = new Date();
  const nextThreeBusinessDays = [];
  let currentDate = new Date(today);

  while (nextThreeBusinessDays.length < 3) {
    currentDate.setDate(currentDate.getDate() + 1);

    // Skip Saturdays (day 6) and Sundays (day 0)
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      nextThreeBusinessDays.push(new Date(currentDate));
    }
  }

  useEffect(() => {
    console.log("Selected Date: ", nextThreeBusinessDays);
  }, [selectedDate]);

  let content = [];
  //first row with empty spaces
  if (!row) {
    for (let i = 0; i < firstDay; i++) {
      content.push(<td></td>);
    }
    console.log("content", content.length);

    let len = 7 - content.length;
    for (let i = 1; i <= len; i++) {
      content.push(
        <>
          {activeDay === i + 1 &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <td
              key={i + 1}
              onClick={() =>
                onSelectedDate(new Date(currentYear, currentMonth, i + 1))
              }
              className={`relative py-2 px-2 md:px-3  text-center text-gray-800 ${
                content.length == 0 || content.length === 6
                  ? "text-red-500 cursor-not-allowed"
                  : "cursor-pointer hover:text-yellow-400"
              }`}
            >
              <span
                className={` rounded-full border-yellow-400 border-2 ${
                  selectedDate && // Update the variable name here
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear
                    ? "bg-yellow-400 px-2 py-1 rounded-full text-white" // Add your yellow background class here
                    : ""
                }`}
              >
                {i}
              </span>
            </td>
          ) : (
            <td
              key={i + 1}
              onClick={() =>
                onSelectedDate(new Date(currentYear, currentMonth, i + 1))
              }
              className={`${
                content.length == 0 || content.length == 6
                  ? "text-red-500 cursor-not-allowed "
                  : "pointer hover:text-yellow-400"
              } relative py-2 px-2 md:px-3   text-center text-gray-800 `}
            >
              <span
                className={`${
                  selectedDate && // Update the variable name here
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear
                    ? "bg-yellow-400 px-2 py-1 rounded-full" // Add your yellow background class here
                    : ""
                }`}
              >
                {i}
              </span>
            </td>
          )}
        </>
      );
    }

    return <>{content}</>;
  }
  //other rows
  for (let i = 1; i <= 7; i++) {
    const day = i + (7 * row - firstDay);
    const date = new Date(currentYear, currentMonth, day);

    // Check if the date is one of the next three business days
    const isTodayOrNextThreeBusinessDays = nextThreeBusinessDays.some(
      (businessDay) =>
        date.getDate() === businessDay.getDate() &&
        date.getMonth() === businessDay.getMonth() &&
        date.getFullYear() === businessDay.getFullYear()
    );

    const isSelectable = isTodayOrNextThreeBusinessDays;
    if (day <= lastDayInMonth) {
      content.push(
        <>
          {activeDay === i + (7 * row - firstDay) &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <td
              key={day}
              onClick={() => isSelectable && onSelectedDate(date)}
              className={`relative py-2 px-2 md:px-3   text-center text-gray-800 ${
                i == 1 || i == 7
                  ? "text-red-500 cursor-not-allowed "
                  : "cursor-pointer hover:text-yellow-400"
              } `}
            >
              <span
                className={`py-2 px-3 rounded-full border-2 border-yellow-400 ${
                  selectedDate && // Update the variable name here
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear
                    ? "bg-yellow-400" // Add your yellow background class here
                    : null
                } `}
              >
                {i + (7 * row - firstDay)}
              </span>
            </td>
          ) : (
            <td
              key={day}
              onClick={() => isSelectable && onSelectedDate(date)}
              className={`relative py-2 px-2 md:px-3   text-center text-gray-800 ${
                i == 1 || i == 7
                  ? "text-red-500 cursor-not-allowed "
                  : "cursor-pointer hover:text-yellow-400"
              } `}
            >
              <span
                className={`${
                  selectedDate && // Update the variable name here
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear
                    ? "bg-yellow-400  px-2 py-1 rounded-full" // Add your yellow background class here
                    : isSelectable
                    ? "bg-green-400 px-2 py-1 rounded-full"
                    : null
                }`}
              >
                {i + (7 * row - firstDay)}
              </span>
            </td>
          )}
        </>
      );
    }
  }
  return <>{content}</>;
}

export default CalendarRow;
