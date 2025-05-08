import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const tabs = [
    {
      label: "Student Login",
      value: "student",
    },
    {
      label: "Parents Login",
      value: "parents",
    },
  ];
  const [selectedTab, setselectedTab] = useState(tabs[0]?.value);
  return (
    <div className="bg-white p-6 drop-shadow-xl text-black w-full max-w-sm mx-auto order-1 lg:order-1 !relative !z-[2]">
      <div className="flex flex-col items-center mb-4">
        <img
          src="/assets/user-img.png"
          alt="Avatar"
          className="w-20 h-20 -mt-16 mb-2"
        />
        <div className="border-b-2 text-sm w-full flex items-center">
          {tabs?.map((item, index) => (
            <button
              onClick={() => setselectedTab(item?.value)}
              key={index}
              className={` w-1/2 text-center pb-2 ${
                selectedTab === item?.value
                  ? "text-green-600 border-b-2 -mb-[2px] border-primary font-semibold"
                  : "text-gray-500"
              }`}
            >
              {item?.label}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full mb-2">
        <label htmlFor="email" className="text-xs">
          {selectedTab === tabs[0]?.value
            ? "Mobile Number or Key"
            : "Parent Mobile or Email"}
        </label>
        <input
          type="email"
          id="email"
          className="focus:outline-none focus:ring-4 ring-blue-500 bg-gray-300 w-full p-1 transition-all ease-in-out duration-200"
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="password" className="text-xs">
          {selectedTab === tabs[0]?.value
            ? "Student Password"
            : "Parent Password"}
        </label>
        <input
          type="password"
          id="password"
          className="focus:outline-none focus:ring-4 ring-blue-500 bg-gray-300 w-full p-1 transition-all ease-in-out duration-200"
        />
      </div>
      <Button
        isSubmit={true}
        text={"Login"}
        rounded={"text-white"}
        isWidthFull={true}
      />
      <div className={`flex justify-between text-xs text-gray-600 mt-4 ${selectedTab === tabs[0]?.value ? "" : "!justify-end"}`}>
        <a href="#">Forgot Password</a>
        {selectedTab === tabs[0]?.value && <Link to={"/account/register"} className="cursor-pointer">Create Account</Link>}
      </div>
    </div>
  );
};

export default LoginForm;
