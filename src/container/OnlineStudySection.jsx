import React from "react";

const OnlineStudySection = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Box */}
      <div className="relative w-full lg:w-1/2 bg-[#1A1A2E] text-white p-8 rounded-md">
        <ul className="space-y-4 text-lg font-medium">
          <li>- 256 Courses</li>
          <li>- Expert Teachers</li>
          <li>- Online Education</li>
        </ul>
        {/* Overlay people image */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0 lg:bottom-0">
          <img
            src="https://i.imgur.com/FXiX6xR.png" // Replace with actual image URL
            alt="Students"
            className="w-64 lg:w-80"
          />
        </div>
      </div>

      {/* Right Box */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Why Online Study With{" "}
          <span className="text-blue-600">SchoolAura</span>
        </h2>
        <p className="text-gray-700 mb-4">
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
    </section>
  );
};

export default OnlineStudySection;
