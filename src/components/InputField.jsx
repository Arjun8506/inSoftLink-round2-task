import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-offset-emerald-600 focus:outline-none"
    />
  );
};

export default InputField;
