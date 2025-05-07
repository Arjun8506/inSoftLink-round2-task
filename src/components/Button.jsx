import React from "react";

const Button = ({
  isSubmit = false,
  text,
  Icon = null,
  backgroundColor = "bg-secondary",
  rounded = null,
  hover = null,
  isWidthFull = false,
}) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={`flex items-center justify-center gap-2 py-2 ${backgroundColor} ${
        rounded !== null ? rounded : "rounded-none"
      } ${hover !== null && hover} ${isWidthFull ? "w-full" : "w-fit"}`}
    >
      {Icon !== null && <Icon />}
      {text}
    </button>
  );
};

export default Button;
