import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import handler from "../../utils/ip";

import { axiosInstance } from "../../utils/axios";
import zipCode from "../../utils/zipCodeSecond.json";
import toast, { Toaster } from "react-hot-toast";

const LeadForm = ({ isOpen, onClose, jobTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    DateOfBirth: "",
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
    setIsSubmitting(true);
    try {
      // Send the formData to the server
      const res = await axiosInstance.post("/form/submit-lead", input);

      if (res.status === 200) {
        setIsSubmitting(false);
        toast.success(res.data.message);
        setInput({
          ZipCode: "",
          State: "",
          Address: "",
          IpAddress: handler,
          FirstName: "",
          LastName: "",
          City: "",
          PhoneNumber: "",
          EmailAddress: "",
          DateOfBirth: "",
        });
      } else {
        setIsSubmitting(false);
        toast.error(res.data.message || res.data.error);
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error(error.response.data.message || error?.error);
    }
  };
  return (
    <div className="w-[95%] md:w-auto relative top-[5.5rem] xl:top-[8.5rem] mb-16   px-2 md:px-16">
      <div className="w-full md:w-[580px] mx-auto bg-white p-4 rounded-lg  flex justify-center items-center ">
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
                  className="appearance-none block w-full bg-slate-100  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                  className="appearance-none bg-slate-100 block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div className="w-full">
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
                className="appearance-none bg-slate-100 block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="example@gmail.com"
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="flex flex-wrap -mx-3 pb-2">
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
                  className="appearance-none bg-slate-100 block w-full  text-gray-700 border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="phone"
                  placeholder="0123 4567 89"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="relative w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Date of Birth
                </label>
                <input
                  name="DateOfBirth"
                  value={input.DateOfBirth}
                  className="appearance-none bg-slate-100 block w-full  text-gray-700 border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="phone"
                  placeholder="YYYY-MM-DD"
                  onChange={onChangeHandler}
                  required
                />
                <span className="absolute -bottom-3 left-3 text-red-500 text-[8px]">
                  *Date of birth should be YYYY-MM-DD format...
                </span>
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
                  className="appearance-none bg-slate-100 block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>
            <div className="flex  -mx-3">
              <div className="relative w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  State
                </label>
                <input
                  name="State"
                  value={input.State}
                  className="appearance-none bg-slate-100 block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  onChange={onChangeHandler}
                  required
                />
                <span className="absolute bottom-0 left-3 text-red-500 text-[8px]">
                  *state should be short form like AL, AK...
                </span>
              </div>

              <div className="w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  City
                </label>
                <input
                  name="City"
                  value={input.City}
                  className="appearance-none bg-slate-100 block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                  className="appearance-none bg-slate-100 block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <div class={`md:flex md:items-center justify-end `}>
              <button
                class={`shadow   bg-[#0f1235] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex gap-2 items-center justify-center`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <span className="loading loading-spinner text-secondary"></span>
                )}
                <span>Submit</span>
              </button>
            </div>
          </form>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
