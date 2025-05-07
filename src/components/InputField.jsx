import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 p-2 mb-3 rounded"
    />
  );
};

export default InputField;
