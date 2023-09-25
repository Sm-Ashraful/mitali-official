import React, { useState, useEffect } from "react";

import Select from "react-select";
import tzIds from "tz-ids";

const clockTime = [
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
];

const SelectTime = ({
  setSelectTime,
  setSelectedTimeZone,
  selectedTimeZone,
}) => {
  const [currentHour, setCurrentHour] = useState(
    new Date().getHours() % 12 || 12
  );
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const [isAM, setIsAM] = useState(new Date().getHours() < 12);

  const timeZoneOptions = tzIds.map((tz) => ({
    label: tz,
    value: tz,
  }));

  const handleChange = (selectedOption) => {
    setSelectedTimeZone(selectedOption);
    // You can use selectedOption.value to access the selected time zone identifier
  };

  useEffect(() => {
    // Update the current time every minute
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentHour(now.getHours() % 12 || 12);
      setCurrentMinute(now.getMinutes());
      setIsAM(now.getHours() < 12);
    }, 60000); // Update every minute

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);
  return (
    <div className="font-semibold text-[18px] pb-2 ">
      <p className="border-b border-[#0479ae]">Select A Time:</p>
      <div className="flex flex-wrap justify-between gap-x-10 gap-y-5 pt-5">
        {clockTime.map((time, idx) => {
          // Parse the time string to get the hour, minute, and AM/PM
          const [hour, minutePart] = time.split(":");
          const [minute, ampm] = minutePart.split(" ");

          // Determine if the time is in the current period (AM or PM)
          const isCurrentAM = isAM && ampm === "AM";
          const isCurrentPM = !isAM && ampm === "PM";

          // Calculate if the button should be enabled
          const isButtonEnabled =
            (isCurrentAM &&
              ampm === "AM" &&
              parseInt(hour, 10) === currentHour &&
              parseInt(minute, 10) >= currentMinute) ||
            (isCurrentPM &&
              ampm === "PM" &&
              parseInt(hour, 10) === currentHour &&
              parseInt(minute, 10) >= currentMinute) ||
            (isCurrentAM &&
              ampm === "AM" &&
              parseInt(hour, 10) > currentHour) ||
            (isCurrentPM && ampm === "PM" && parseInt(hour, 10) > currentHour);

          return (
            <button
              key={idx}
              className={`w-[40%] rounded-xl px-3 py-2 text-sm font-medium transition duration-200 ${
                isButtonEnabled
                  ? "bg-[#052149] text-white hover:bg-blue-600 active:bg-yellow-400 focus:bg-yellow-300"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              disabled={!isButtonEnabled}
              onClick={() => setSelectTime(time)}
            >
              {time}
            </button>
          );
        })}
      </div>
      <div className="pt-5">
        <label>Select Time Zone:</label>
        <Select
          options={timeZoneOptions}
          value={selectedTimeZone}
          onChange={handleChange}
          placeholder="Select a time zone"
        />
      </div>
    </div>
  );
};

export default SelectTime;
