import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="bg-white border-b text-sm text-gray-800 px-3 lg:px-20 py-2 flex justify-between items-center flex-wrap">
      <div className="flex items-center gap-2">
        <a
          href="tel:+919540343932"
          className="text-blue-500 text-xs font-semibold flex items-center gap-1"
        >
          <div className="p-[5px] bg-primary text-white flex items-center justify-center rounded-full">
            <FaPhone size={12} className="rotate-0" />
          </div>
          +91-9540343932
        </a>
        <a
          href="mailto:contact@schoolaura.com"
          className="text-gray-600 text-xs flex items-center gap-1"
        >
          <div className="p-[5px] bg-primary text-white flex items-center justify-center rounded-full">
            <FaEnvelope size={12} className="rotate-0" />
          </div>
          contact@schoolaura.com
        </a>
      </div>
      <div className="items-center space-x-2 mt-2 sm:mt-0 hidden md:flex">
        <a
          href="#"
          className="bg-green-500 text-white px-2 py-1 rounded text-xs hidden lg:block"
        >
          WhatsApp
        </a>
        <a
          href="#"
          className="bg-lime-500 text-white px-2 py-1 rounded text-xs hidden lg:block"
        >
          Mobile App
        </a>
        <a href="#" className="bg-black text-white px-3 py-1 rounded text-xs">
          Login
        </a>
        <a href="#" className="bg-black text-white px-3 py-1 rounded text-xs">
          Registration
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
