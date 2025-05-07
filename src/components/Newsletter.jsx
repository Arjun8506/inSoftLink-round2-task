import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-white text-center px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900">
        SUBSCRIBE OUR <span className="text-[#f55900]">NEWSLETTER</span>
      </h2>
      <div className="mt-4 flex justify-center items-center gap-2 flex-wrap">
        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-2 border border-gray-300 rounded w-[260px]"
        />
        <button className="bg-[#f55900] text-white px-6 py-2 rounded">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
