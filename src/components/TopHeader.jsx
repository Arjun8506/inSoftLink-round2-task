import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-white border-b text-sm text-gray-800 px-4 py-2 flex justify-between items-center flex-wrap">
      <div className="flex items-center space-x-4">
        <a href="tel:+919540343932" className="text-blue-500 font-semibold">
          +91-9540343932
        </a>
        <a href="mailto:contact@schoolaura.com" className="text-gray-600">
          contact@schoolaura.com
        </a>
      </div>
      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
        <a
          href="#"
          className="bg-green-500 text-white px-2 py-1 rounded text-xs"
        >
          WhatsApp
        </a>
        <a
          href="#"
          className="bg-lime-500 text-white px-2 py-1 rounded text-xs"
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
