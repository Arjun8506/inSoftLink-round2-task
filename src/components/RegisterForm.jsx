import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const RegisterForm = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  return (
    <div className="bg-white p-4 drop-shadow-xl text-black w-full max-w-xl mx-auto order-1 lg:order-1 !relative !z-[2]">
      <h2 className="text-2xl font-semibold text-center">
        Join Us For Education
      </h2>

      <hr className="my-4 border-gray-200" />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm">Name</label>
          <input
            type="text"
            className="focus:outline-none focus:ring-4 ring-blue-500 border border-gray-200 rounded w-full p-1 transition-all ease-in-out duration-200 text-sm"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Mobile Number</label>
          <div className="relative">
            <input
              type="text"
              className="focus:outline-none focus:ring-4 ring-blue-500 border border-gray-200 rounded w-full p-1 transition-all ease-in-out duration-200 text-sm"
            />
            <div className="w-fit absolute -top-2 right-0">
              <Button
                text={"Send OTP"}
                rounded={"text-white !text-xs px-2 py-1"}
                backgroundColor="bg-primary"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-1 text-sm">Enter OTP</label>
          <input
            type="text"
            className="focus:outline-none focus:ring-4 ring-blue-500 border border-gray-200 rounded w-full p-1 transition-all ease-in-out duration-200 text-sm"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Pincode</label>
          <input
            type="text"
            className="focus:outline-none focus:ring-4 ring-blue-500 border border-gray-200 rounded w-full p-1 transition-all ease-in-out duration-200 text-sm"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Select State</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="focus:outline-none focus:ring-4 ring-blue-500 border border-gray-200 rounded w-full p-1 transition-all ease-in-out duration-200 text-sm"
          >
            <option>Select a City</option>
            <option>West Bengal</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm">Select City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="focus:outline-none focus:ring-4 ring-blue-500 border border-gray-200 rounded w-full p-1 transition-all ease-in-out duration-200 text-sm"
          >
            <option>Select a City</option>
            <option>Kolkata</option>
            <option>Howrah</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            className="focus:outline-none focus:ring-4 ring-blue-500 border border-gray-200 rounded w-full p-1 transition-all ease-in-out duration-200 text-sm"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Confirm Password</label>
          <input
            type="password"
            className="focus:outline-none focus:ring-4 ring-blue-500 border border-gray-200 rounded w-full p-1 transition-all ease-in-out duration-200 text-sm"
          />
        </div>
      </div>
      <hr className="my-4 border-gray-200" />

      <div className={`flex justify-between items-center text-gray-600 mt-4`}>
        <Link to={"/account/login"} className="cursor-pointer text-sm">
          Already Have An Account!
        </Link>
        <button className="bg-blue-600 text-white px-4 py-1 text-sm rounded hover:bg-blue-700 transition">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
