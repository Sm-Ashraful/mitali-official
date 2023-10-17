import { useStateValue } from "@/context/StateProvider";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { axiosInstance } from "@/utils/axios";
import Backdrop from "../Backdrop";

const ApplyForm = ({ isOpen, onClose }) => {
  //   const [{ contactInfo }, dispatch] = useStateValue();
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
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
    const selectedFile = e.target.files;
    if (selectedFile) {
      // Handle the selected file here
      console.log("Selected file:", selectedFile);

      // You can save it to state or do further processing
      // For example, if you're using React and have a state 'input':
      // setInput({ ...input, cv: selectedFile });
    }
    // try {
    //   const res = await axiosInstance.post("/form", input);
    //   if (res.status === 201) {
    //     Swal.fire({
    //       title: "Success",
    //       text: res.data.message,
    //       icon: "success",
    //     });
    //   } else {
    //     Swal.fire({
    //       title: "Error",
    //       text: res.data.message,
    //       icon: "error",
    //     });
    //   }
    //   dispatch({ type: "setContactInfo", item: false });
    console.log("request.status", input);
    //   setInput({
    //     name: "",
    //     phone: "",
    //     email: "",
    //     category: "",
    //     company: "",
    //     message: "",
    //   });
    // } catch (error) {
    //   console.log(Error);
    // }
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
              <form onSubmit={handleSubmit} className="w-full max-w-lg pt-5">
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
                    // value={input.cv}
                    className="appearance-none block w-full text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="file"
                    accept=".pdf, .doc, .docx"
                    onChange={onChangeHandler}
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
