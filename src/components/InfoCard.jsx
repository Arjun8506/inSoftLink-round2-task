import React from "react";

const InfoCard = ({ title, buttons }) => {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md text-center">
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          className="w-full bg-orange-500 text-white py-1.5 my-1 rounded hover:bg-orange-600 transition"
        >
          {btn}
        </button>
      ))}
      <a href="#" className="text-sm text-black font-medium mt-2 inline-block">
        READ MORE →
      </a>
    </div>
  );
};

export default InfoCard;
