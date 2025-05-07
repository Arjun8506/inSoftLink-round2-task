import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const LoginForm = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-black w-full max-w-md mx-auto">
      <div className="flex flex-col items-center mb-4">
        <img
          src="/assets/user-img.png"
          alt="Avatar"
          className="w-16 h-16 mb-2"
        />
        <div className="text-lg">
          <span className="text-green-600 font-semibold">Student Login</span>
          <span className="text-gray-500 ml-2">Parents Login</span>
        </div>
      </div>
      <InputField type="text" placeholder="Mobile Number or Key" />
      <InputField type="password" placeholder="Student Password" />
      <Button text={"Login"} rounded={"rounded"} />
      <div className="flex justify-between text-sm text-gray-600">
        <a href="#">Forgot Password</a>
        <a href="#">Create Account</a>
      </div>
    </div>
  );
};

export default LoginForm;
