import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const InfoCard = ({ title, buttons }) => {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md text-center">
      <h3 className="font-medium text-xs mb-3">{title}</h3>
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          className="w-full bg-orange-500 text-white py-1.5 my-1 rounded hover:bg-orange-600 transition text-sm"
        >
          {btn}
        </button>
      ))}
      <a href="#" className=" text-black font-medium mt-2 text-xs flex items-center justify-center gap-1">
        READ MORE <FaAngleRight />
      </a>
    </div>
  );
};

export default InfoCard;
