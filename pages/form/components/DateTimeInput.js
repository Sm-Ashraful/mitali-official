import React from "react";

const DateTimeInput = ({ id, required }) => {
  return (
    <div>
      <input type="datetime-local" id={id} name={id} required={required} />
    </div>
  );
};

export default DateTimeInput;
