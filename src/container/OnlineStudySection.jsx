import React from "react";
import Heading from "../components/Heading";

const OnlineStudySection = () => {
  return (
    <section className="bg-white py-12 pb-20 lg:pt-20 lg:max-w-4xl mx-auto flex flex-col lg:grid lg:grid-cols-3 items-center gap-12 lg:gap-5 relative z-[2]">
      <div className="relative w-full lg:h-full order-2 lg:order-1">
        <div
          className=" w-full py-10 pb-20 md:h-72 lg:h-full bg-secondary text-white flex items-center justify-center  bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("/assets/Clip.png")`,
            clipPath: `polygon(0 0, 100% 0, 100% 90%, 0% 100%)`,
          }}
        >
          <ul className="space-y-2 text-2xl font-medium">
            <li>- 256 Courses</li>
            <li>- Expert Teachers</li>
            <li>- Online Education</li>
          </ul>
          {/* Overlay people image */}
        </div>
        <div className="absolute -bottom-10 md:-bottom-20 lg:hidden left-0 transform lg:translate-x-0 z-[2] lg:left-0 lg:bottom-0 w-[90%]">
          <img src="/assets/Layer-20.png" alt="Students" className="w-full" />
        </div>
      </div>

      <div className="w-full order-1 lg:col-span-2 lg:order-2 p-3">
        <Heading
          firstPart={"Why Online Study With SchoolAura"}
          isFlexCol={false}
        />
        <p className="text-gray-700 mt-2 mb-4">
          The world is changing for the better. Because of the advancement of
          technology, geek minds have grown tired of doing more work, and
          carrying books, notebooks and how much to buy books?
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Solution:</strong> Now you can find a simple solution with
          schoolaura. In these days almost everyone has a Smartphone, Tab or
          Laptop. So just open your device and start your study from anywhere
          anytime while you are travelling, sitting in the park, and etc.
        </p>
        <p className="text-gray-700">
          Now use your time and gain knowledge in every second and use your
          device for right things not for waste your time.
        </p>
      </div>
      <div className="absolute -bottom-40 hidden lg:block left-0 transform lg:translate-x-0 z-[2] w-[100%]">
        <img src="/assets/Layer-20.png" alt="Students" className="w-full object-contain" />
      </div>
    </section>
  );
};

export default OnlineStudySection;
