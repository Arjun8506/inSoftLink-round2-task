import React from "react";
import { FaPlay } from "react-icons/fa6";
import Heading from "../components/Heading";

const VisitCampus = () => {
  return (
    <section className="bg-[#f1f1f1] py-10 px-3 lg:py-2 lg:px-0 lg:max-w-4xl lg:mx-auto">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-72 bg-black relative">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Campus Tour"
            allowFullScreen
          />
        </div>

        <div data-aos="fade-up" className="">
          <Heading
            firstPart={"VISIT OUR CAMPUS"}
            isCenter={false}
            isLine={true}
            secondPart={"WITH IMAGE GALLERY"}
          />
          <p className="text-gray-500 text-sm my-5">
            Even slightly believable. If you are going use a passage of Lorem
            Ipsum need
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-tertiary mb-2">
            OR WATCH WITH VIDEO
          </h3>
          <div className="flex items-center gap-2 text-[#f55900] transition-all ease-in-out duration-300 font-medium cursor-pointer rounded w-fit">
            <FaPlay className="text-lg" />
            <span className="text-[#0c0c24]">PLAY NOW</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitCampus;
