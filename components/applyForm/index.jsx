import { useStateValue } from "../../context/StateProvider";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { axiosInstance } from "@/utils/axios";
import Backdrop from "../Backdrop";
import axios from "axios";

const ApplyForm = ({ isOpen, onClose, jobTitle }) => {
  //   const [{ contactInfo }, dispatch] = useStateValue();
  const [input, setInput] = useState({
    jobTitle: jobTitle,
    name: "",
    phone: "",
    email: "",
    cv: null,
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const cvFile = e.target.files[0];
    setInput((prevInput) => ({
      ...prevInput,
      cv: cvFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the formData to the server
      const res = await axiosInstance.post("/submit", input, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for sending files
        },
      });

      if (res.status === 201) {
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
      setInput({
        jobTitle: "",
        name: "",
        phone: "",
        email: "",
        cv: null,
      });
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {isOpen && <Backdrop onClose={onClose} />}
      {isOpen && (
        <div className="w-[95%] md:w-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
          <div className="w-full md:w-[580px] bg-white p-4 rounded-lg shadow-lg flex justify-center items-center ">
            <div>
              <h2
                className={`text-[22px] uppercase font-bold  border-b-2 border-black mr-6 type === "help" ? "" : " text-center"
        }`}
              >
                Apply Form
              </h2>
              <p className="py-2  ">
                <span className="uppercase tracking-wide text-gray-700 text-sm font-bold">
                  Job Title:
                </span>
                <span className="text-gray-700 text-sm font-semibold">
                  {" "}
                  {jobTitle}
                </span>
              </p>
              <form onSubmit={handleSubmit} className="w-full max-w-lg ">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Full Name
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={input.name}
                      className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
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
                      name="phone"
                      value={input.phone}
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
                      Email
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      value={input.email}
                      className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="email"
                      placeholder="example@gmail.com"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>

                <div className="w-full  md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-zip"
                  >
                    Upload Your Cv
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="cv"
                    className="appearance-none block w-full text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="file"
                    accept=".pdf, .doc, .docx"
                    onChange={handleFileChange}
                  />
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
      )}
    </>
  );
};

export default ApplyForm;
