import { useStateValue } from "@/context/StateProvider";
import React, { useEffect, useState } from "react";

const ContactForm = ({ formTitle, type }) => {
  const [{ contactInfo }, dispatch] = useStateValue();
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    company: "",
    message: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "setContactInfo", item: input });
    setInput({
      name: "",
      phone: "",
      email: "",
      category: "",
      company: "",
      message: "",
    });
  };
  useEffect(() => {
    console.log("contactInfo: ", contactInfo);
  }, [contactInfo]);
  return (
    <div>
      <h2
        className={`text-[22px] uppercase font-bold  border-b-2 border-black mr-6 ${
          type === "help" ? "" : " text-center"
        }`}
      >
        {formTitle || "Enquiry Form"}
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg pt-5">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
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
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Choose Category
            </label>
            <div className="relative">
              <select
                name="category"
                value={input.category}
                className="block appearance-none w-full  border border-black text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={onChangeHandler}
              >
                <option>Select Category</option>
                <option>B2B Telemarketing</option>
                <option>Digital Marketing</option>
                <option>Web Development & Design</option>
                <option>Graphics Design</option>
                <option>E-commerce and Retails</option>
                <option>Customer support</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Company/Organization
            </label>
            <input
              name="company"
              value={input.company}
              className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="w-full  md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            Your Message
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={input.message}
            rows="4"
            className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            label="Message"
            onChange={onChangeHandler}
          />
        </div>
        <div class={`md:flex md:items-center justify-end `}>
          <button
            class={`${
              type === "help" ? "w-full" : ""
            } shadow   bg-[#0f1235] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
