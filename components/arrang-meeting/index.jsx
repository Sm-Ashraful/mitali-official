import React from "react";
import Model from "../Models";

import { SiGooglemeet } from "react-icons/si";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import SelectTime from "./partials/SelectTime";
import MeetingForm from "./partials/MeetingForm";
import dayjs from "dayjs";
import { generator, months } from "../../context/calender";
import cn from "../../context/ch";

import Swal from "sweetalert2";

import { useStateValue } from "../../context/StateProvider";
import { useRouter } from "next/router";
import { axiosInstance } from "../../utils/axios";

const ArrangeMeeting = ({ mobileView }) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(null);
  const [active, setActive] = useState(false);
  const [{ showModal }, dispatch] = useStateValue();
  const [selectTime, setSelectTime] = useState(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState({
    label: "Asia/Dhaka",
    value: "Asia/Dhaka",
  });
  const [formData, setFormData] = useState({
    fname: "",
    phone: "",
    email: "",
    topic: "",
    guestEmail: "",
  });
  /// state changing code
  const [showCalendar, setShowCalendar] = useState(true);
  const [showSelectTime, setShowSelectTime] = useState(false);
  const [showMeetingForm, setShowMeetingForm] = useState(false);

  const formattedDate = selectDate.format("dddd, D MMMM YYYY");

  const router = useRouter();

  const handleNextButtonClick = async () => {
    if (showCalendar) {
      setShowCalendar(false);
      setShowSelectTime(true);
    } else if (showSelectTime) {
      setShowSelectTime(false);
      setShowMeetingForm(true);
    } else if (showMeetingForm) {
      try {
        const meetingData = {
          date: formattedDate,
          time: selectTime,
          timeZone: selectedTimeZone.value,
          fname: formData.fname,
          phone: formData.phone,
          email: formData.email,
          topic: formData.topic,
          guestEmail: formData.guestEmail,
        };

        setFormData({
          fname: "",
          phone: "",
          email: "",
          topic: "",
          guestEmail: "",
        });
        setSelectedDate(null);
        setSelectTime(null);
        const res = await axiosInstance.post("/meet", meetingData);
        if (res.status === 201) {
          Swal.fire({
            title: "Success",
            text: res.data.message,
            icon: "success",
          });
        }
        cancelArrangeMeeting();
        setShowCalendar(true);
      } catch (error) {}
    }
  };

  const handleMeetingBackward = () => {
    if (showSelectTime) {
      setShowSelectTime(false);
      setShowCalendar(true);
      setShowMeetingForm(false);
    } else if (showMeetingForm) {
      // Handle what should happen when the form is complete
      // For example, submit the form data or close the popup
      setShowSelectTime(true);
      setShowMeetingForm(false);
      setShowCalendar(false);
    }
  };

  const cancelArrangeMeeting = (e) => {
    dispatch({ type: "setShowModal", item: false });
  };
  useEffect(() => {
    if (showModal) {
      dispatch({ type: "setSidebar", item: false });
    }
  }, [showModal]);
  //end of state change

  const handleSelectDate = (date) => {
    setSelectDate(date);
    setActive(true);
    setSelectedDate(date);
  };

  return (
    <>
      {showModal && (
        <Model mobileView={mobileView}>
          <div className="flex flex-col md:flex-row h-full w-full bg-white text-black relative">
            <div className="relative flex items-center justify-center text-white w-full md:w-[48%] md:h-full  p-5 bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
              <div className=" pb-10 md:pb-2">
                <h2 className="text-[26px] font-bold text-center ">
                  Ms Mitali International Limited
                </h2>
                <p className="text-center font-semibold">
                  Discus With Us Via Google Meet
                </p>
                <p className="text-[24px] text-yellow-400 font-bold flex justify-center ">
                  <SiGooglemeet />
                </p>
              </div>

              <p className="text-[10px] absolute left-5 bottom-5 border-b border-white text-gray-200">
                Note: Web conferencing details provided upon confirmation.
              </p>
            </div>
            <div className="hidden md:block w-[1%] h-full bg-yellow-400"></div>
            <div
              onClick={handleMeetingBackward}
              className="absolute right-3 top-3 cursor-pointer font-extrabold border p-1 text-[#045c94] border-red-500"
            >
              <FaLongArrowAltLeft />
            </div>

            <div className="w-full md:w-[48%] p-5">
              {showCalendar && (
                <div className="w-full h-full  p-5">
                  <div className="font-semibold text-[18px] pb-2">
                    <p className="pb-3">
                      Select A Date:
                      <span className="text-sm text-[#045c94] pl-5 font-semibold">
                        {formattedDate}
                      </span>
                    </p>
                    <div className="">
                      <div className=" px-5 flex justify-between items-center bg-gradient-to-r from-[#0A223A]  via-[#214265] to-[#0A223A]">
                        <span
                          className=" cursor-pointer"
                          onClick={() =>
                            setToday(today.month(today.month() - 1))
                          }
                        >
                          <img src={"/Image/chevron-forward.png"} alt="" />
                        </span>

                        <p className="text-white text-center py-1 border-0 rounded">
                          {months[today.month()]}
                        </p>

                        <span
                          className=" cursor-pointer"
                          onClick={() =>
                            setToday(today.month(today.month() + 1))
                          }
                        >
                          <img src={"/Image/Vector.png"} alt="" />
                        </span>
                      </div>
                      <div className=" grid grid-cols-7">
                        {days.map((week, idx) => {
                          return (
                            <div key={idx}>
                              <p className="h-8 grid place-content-center text-[#0A223A] text-sm">
                                {week}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      <div className=" grid grid-cols-7">
                        {generator(today.month(), today.year()).map(
                          ({ currentMonth, date, today }, index) => {
                            return (
                              <div
                                key={index}
                                className="h-8 grid place-content-center text-[10px]"
                              >
                                <p
                                  className={`${
                                    dayjs(date).isBefore(dayjs(), "day") &&
                                    dayjs(date).isBefore(dayjs(), "day")
                                      ? " text-[#777] cursor-not-allowed hover:bg-none hover:border-none"
                                      : today
                                      ? `cursor-pointer  ${
                                          active
                                            ? "border"
                                            : "border rounded-md bg-gradient-to-r from-[#DFBF68] via-[#BFA04B] to-[#DFBF68]"
                                        } text-[#0A223A]`
                                      : "text-[#0A223A] cursor-pointer "
                                  } hover:border rounded-sm hover:bg-gradient-to-r  from-[#DFBF68] via-[#BFA04B] to-[#DFBF68] ${
                                    // Check if the date is selected
                                    dayjs(date).isSame(selectedDate, "day")
                                      ? "bg-gradient-to-r from-[#DFBF68] via-[#BFA04B] to-[#DFBF68]" // Apply the CSS class for selected date
                                      : ""
                                  }`}
                                  onClick={
                                    dayjs(date).isBefore(dayjs(), "day")
                                      ? null
                                      : () => handleSelectDate(date)
                                  }
                                >
                                  <span
                                    className={`${
                                      cn(currentMonth) ? "" : "invisible"
                                    } p-[.3rem]`}
                                    onClick={() => handleSelectDate(date)}
                                  >
                                    {dayjs(date).date()}
                                  </span>
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showSelectTime && (
                <div className="w-full h-full  pb-[75px] md:pb-5">
                  <SelectTime
                    setSelectTime={setSelectTime}
                    selectedTimeZone={selectedTimeZone}
                    setSelectedTimeZone={setSelectedTimeZone}
                  />
                </div>
              )}

              {showMeetingForm && (
                <div className="w-full h-full pb-[75px] md:pb-5">
                  <MeetingForm formData={formData} setFormData={setFormData} />
                </div>
              )}
            </div>

            <div className="absolute right-10 bottom-5 flex gap-5">
              <button
                className="rounded-xl bg-red-500  px-6 py-2 text-sm font-medium text-white transition duration-200 hover:bg-red-800 active:bg-red-800"
                onClick={cancelArrangeMeeting}
              >
                Cancel
              </button>
              <button
                className="rounded-xl bg-[#052149] px-6 py-2 text-sm font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200"
                onClick={handleNextButtonClick}
              >
                Next&rarr;
              </button>
            </div>
          </div>
        </Model>
      )}
    </>
  );
};

export default ArrangeMeeting;
