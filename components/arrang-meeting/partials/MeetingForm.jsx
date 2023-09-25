import React, { useState, useRef } from "react";
import Select from "react-select";

const options = [
  { value: "Telemarketing", label: "Telemarketing" },
  { value: "Web Development", label: "Web Development" },
  { value: "Web Design", label: "Web Design" },
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "E-commerce & Retails", label: "E-commerce & Retails" },
  { value: "Graphics Design", label: "Graphics Design" },
  { value: "Export & Import Solution", label: "Export & Import Solution" },
];

const MeetingForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [emailTags, setEmailTags] = useState([]);
  const textareaRef = React.createRef();

  const handleEmailInput = (event) => {
    if (event.key === " " || event.key === ",") {
      if (inputValue.trim()) {
        setEmailTags([...emailTags, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const removeEmailTag = (index) => {
    const updatedEmailTags = [...emailTags];
    updatedEmailTags.splice(index, 1);
    setEmailTags(updatedEmailTags);
  };

  const calculateCursorPosition = () => {
    console.log("Text area.ref, ", textareaRef.current.selectionStart);
    if (textareaRef.current) {
      const lastEmailTag = emailTags[emailTags.length - 1];
      const cursorPosition = lastEmailTag ? lastEmailTag.length + 1 : 0;
      textareaRef.current.selectionStart = cursorPosition;
      textareaRef.current.selectionEnd = cursorPosition;
    }
  };
  return (
    <div>
      <form action="#">
        <div className="flex items-center gap-5">
          <div class="mb-2 w-1/2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="f_name"
            >
              First Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="f_name"
              type="text"
            />
          </div>
          <div class="mb-2 w-1/2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="l_name"
            >
              Last Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="l_name"
              type="text"
            />
          </div>
        </div>
        <div class="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email*
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            required
          />
        </div>

        <div className="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Topic
          </label>
          <Select options={options} />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold underline">
            Add Guest Email
          </p>

          <div className="relative hidden">
            <div className="absolute top-2 text-sm left-0">
              {emailTags.map((tag, index) => (
                <span key={index} className="bg-gray-200 p-1 rounded-full">
                  {tag}
                  <button
                    className="ml-1 text-red-500 cursor-pointer"
                    onClick={() => removeEmailTag(index)}
                  >
                    &#x2715;
                  </button>
                </span>
              ))}
            </div>
            <textarea
              ref={textareaRef}
              placeholder="Enter email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm pl-32"
              rows="3"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyUp={handleEmailInput}
              onFocus={calculateCursorPosition}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MeetingForm;
