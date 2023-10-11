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

const MeetingForm = ({ formData, setFormData }) => {
  const [emailTags, setEmailTags] = useState([]);
  const textareaRef = React.createRef();

  const handleEmailInput = (event) => {
    if (event.key === " " || event.key === ",") {
      if (inputValue.trim()) {
        setEmailTags([...emailTags, formData.guestEmail.trim()]);
        setFormData({ ...formData, guestEmail: "" });
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

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const selectChangeHandler = (selectedOption) => {
    setFormData((prevInput) => ({
      ...prevInput,
      topic: selectedOption.value, // Assuming you want to store the 'value' in your formData
    }));
  };
  return (
    <div>
      <form>
        <div className="flex items-center gap-5">
          <div class="mb-2 w-1/2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="fname"
            >
              Name
            </label>
            <input
              name="fname"
              value={formData.fname}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fname"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div class="mb-2 w-1/2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="phone"
            >
              Mobile Number
            </label>
            <input
              name="phone"
              value={formData.phone}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email*
          </label>
          <input
            name="email"
            value={formData.email}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            required
            onChange={onChangeHandler}
          />
        </div>

        <div className="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Topic
          </label>
          <Select
            name="topic"
            value={formData.topic}
            options={options}
            onChange={selectChangeHandler}
          />
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
              value={formData.guestEmail}
              onChange={onChangeHandler}
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
