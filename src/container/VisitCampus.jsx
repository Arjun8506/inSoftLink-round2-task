import React from "react";
import { FaPlay } from "react-icons/fa6";

const VisitCampus = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Video Block */}
        <div className="aspect-w-16 aspect-h-9 bg-black relative">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Campus Tour"
            allowFullScreen
          />
        </div>

        {/* Text Block */}
        <div className="bg-gray-100 p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c0c24] leading-snug">
            VISIT OUR CAMPUS <br />
            WITH <span className="text-[#f55900]">IMAGE GALLERY</span>
          </h2>
          <hr className="my-4 border-gray-400 w-16" />
          <p className="text-gray-500 text-sm mb-6">
            Even slightly believable. If you are going use a passage of Lorem
            Ipsum need
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-[#0c0c24] mb-2">
            OR WATCH WITH VIDEO
          </h3>
          <div className="flex items-center gap-2 text-[#f55900] font-medium cursor-pointer">
            <FaPlay className="text-lg" />
            <span className="text-[#0c0c24]">PLAY NOW</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitCampus;
