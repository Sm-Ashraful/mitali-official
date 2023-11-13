import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import handler from "@/utils/ip";

import { axiosInstance } from "@/utils/axios";
import axios from "axios";

const ApplyForm = ({ isOpen, onClose, jobTitle }) => {
  //   const [{ contactInfo }, dispatch] = useStateValue();
  const [input, setInput] = useState({
    ZipCode: "",
    State: "",
    Address: "",
    IpAddress: handler,
    FirstName: "",
    LastName: "",
    City: "",
    PhoneNumber: "",
    EmailAddress: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the formData to the server
      const res = await axiosInstance.post("/form/submit-lead", input);

      if (res.status === 200) {
        console.log("Response: ", res.data);
        Swal.fire({
          title: "Success",
          text: res.data.message,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: res.data.message,
          icon: "error",
        });
      }

      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="w-[95%] md:w-auto relative top-[6rem] mb-10   px-2 md:px-16">
        <div className="w-full md:w-[580px] mx-auto bg-white p-4 rounded-lg shadow-lg flex justify-center items-center ">
          <div>
            <h2
              className={`text-[22px] uppercase font-bold  border-b-2 border-black mr-6 type === "help" ? "" : " text-center"
        }`}
            >
              Lead Form
            </h2>

            <form onSubmit={handleSubmit} className="w-full  max-w-lg mt-5 ">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="FirstName"
                    value={input.FirstName}
                    className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Last Name
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="LastName"
                    value={input.LastName}
                    className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Email
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="EmailAddress"
                    value={input.EmailAddress}
                    className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="email"
                    placeholder="example@gmail.com"
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Phone number
                  </label>
                  <input
                    name="PhoneNumber"
                    value={input.PhoneNumber}
                    className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="phone"
                    placeholder="0123 4567 89"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Address
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Address"
                    value={input.Address}
                    className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div className="flex  -mx-3">
                <div className="w-1/3 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    State
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="State"
                    value={input.State}
                    className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    onChange={onChangeHandler}
                  />
                </div>

                <div className="w-1/3 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    City
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="City"
                    value={input.City}
                    className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    onChange={onChangeHandler}
                  />
                </div>

                <div className="w-1/3 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Zip Code
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="ZipCode"
                    value={input.ZipCode}
                    className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div class={`md:flex md:items-center justify-end `}>
                <button
                  class={`shadow   bg-[#0f1235] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyForm;