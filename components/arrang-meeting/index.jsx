import React from "react";
import Model from "../Models";

import { SiGooglemeet } from "react-icons/si";
import { FaClock, FaLongArrowAltLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import SelectTime from "./partials/SelectTime";
import MeetingForm from "./partials/MeetingForm";
import Calender from "../Calender";
import { BsArrowLeft } from "react-icons/bs";

const ArrangeMeeting = ({ setIsArrangeMeetingOpen }) => {
  const [value, onChange] = useState(new Date());
  const [selectTime, setSelectTime] = useState(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState({
    label: "Asia/Dhaka",
    value: "Asia/Dhaka",
  });
  /// state changing code
  const [showCalendar, setShowCalendar] = useState(true);
  const [showSelectTime, setShowSelectTime] = useState(false);
  const [showMeetingForm, setShowMeetingForm] = useState(false);

  const handleNextButtonClick = () => {
    if (showCalendar) {
      setShowCalendar(false);
      setShowSelectTime(true);
    } else if (showSelectTime) {
      setShowSelectTime(false);
      setShowMeetingForm(true);
    } else if (showMeetingForm) {
      // Handle what should happen when the form is complete
      // For example, submit the form data or close the popup
    }
  };

  const handleMeetingBackward = () => {
    console.log("showSelectTime", showSelectTime);
    console.log("showMeetingForm", showMeetingForm);
    console.log("showSelectTime", showSelectTime);
    if (showSelectTime) {
      setShowSelectTime(false);
      setShowCalendar(true);
      setShowMeetingForm(false);
    } else if (showMeetingForm) {
      console.log("showMeetingForm", showMeetingForm);
      // Handle what should happen when the form is complete
      // For example, submit the form data or close the popup
      setShowSelectTime(true);
      setShowMeetingForm(false);
      setShowCalendar(false);
    }
  };

  //end of state change

  useEffect(() => {
    console.log("Select time: ", selectTime);
  }, [selectTime]);

  return (
    <Model>
      <div className="flex h-full w-full bg-white text-black relative">
        <div className="text-white w-[48%] h-full  p-5 bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
          <div className="border-b border-white pb-2">
            <h2 className="text-[26px] font-bold text-center ">
              Ms Mitali International Limited
            </h2>
            <p className="text-center font-semibold">Discus With Us</p>
          </div>
          <div className="text-white   py-3">
            <p className="font-bold">Meeting Details:</p>
            <p className=" flex items-center gap-2">
              <FaClock />:<span className="text-yellow-400 ">30 minutes</span>
            </p>
            <p className=" flex items-center gap-2">
              <SiGooglemeet />:
              <span className=" text-yellow-400">Google Meet</span>
            </p>

            <p className="">
              Date:
              <span className="text-yellow-400 pl-2">
                {value.toDateString()}
              </span>
            </p>

            <p className="">
              Meeting Time:
              <span className="text-yellow-400 pl-2">{selectTime} </span>
            </p>
            <p className="">
              Timezone:
              <span className="text-yellow-400 pl-2">
                {selectedTimeZone.value}
              </span>
            </p>
          </div>
          <p className="text-sm absolute left-5 bottom-5 text-gray-200">
            Note: Web conferencing details provided upon confirmation.
          </p>
        </div>
        <div className="w-[1%] h-full bg-yellow-400"></div>
        <div
          onClick={handleMeetingBackward}
          className="absolute right-3 top-3 cursor-pointer font-extrabold border p-1 text-[#045c94] border-red-500"
        >
          <FaLongArrowAltLeft />
        </div>

        <div className="w-[48%] pt-5">
          {showCalendar && (
            <div className="w-full h-full  p-5">
              <div className="font-semibold text-[18px] pb-2">
                <p>Select A Date:</p>
                <Calender />
              </div>
            </div>
          )}

          {showSelectTime && (
            <div className="w-full h-full  p-5">
              <SelectTime
                setSelectTime={setSelectTime}
                selectedTimeZone={selectedTimeZone}
                setSelectedTimeZone={setSelectedTimeZone}
              />
            </div>
          )}

          {showMeetingForm && (
            <div className="w-full h-full  p-5">
              <MeetingForm />
            </div>
          )}
        </div>

        <div className="absolute right-10 bottom-5 flex gap-5">
          <button
            className="rounded-xl bg-[#052149] px-6 py-2 text-sm font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700"
            onClick={() => setIsArrangeMeetingOpen(false)}
          >
            Cancel
          </button>
          <button
            className="rounded-xl bg-[#045c94] px-6 py-2 text-sm font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200"
            onClick={handleNextButtonClick}
          >
            Next
          </button>
        </div>
      </div>
    </Model>
  );
};

export default ArrangeMeeting;
