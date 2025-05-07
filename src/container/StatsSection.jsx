import React from "react";
import Heading from "../components/Heading";

const StatsSection = () => {
  const stats = [
    {
      icon: "/assets/client-1.png",
      number: "108+",
      label: "Happy School",
    },
    {
      icon: "/assets/client-2.png",
      number: "5360+",
      label: "Happy Parents",
    },
    {
      icon: "/assets/client-3.png",
      number: "58030+",
      label: "Students",
    },
    {
      icon: "/assets/client-4.png",
      number: "10+",
      label: "Happy Tutors",
    },
  ];
  return (
    <section className="bg-white py-20 px-4  md:max-w-4xl md:mx-auto flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20">
      <div className="w-[100%] lg:w-[30%] h-60 lg:h-52 bg-secondary relative">
        <div className="w-[95%] lg:w-full h-60 lg:h-52 absolute -top-10 left-5 bg-[#f1f1f1]"></div>
        <img
          src="/assets/client.png"
          alt="Teacher"
          className="w-[70%] lg:w-[60%] absolute bottom-0 right-0 lg:right-10 rounded-md"
        />
      </div>

      <div className="lg:text-left lg:w-[60%] flex flex-col items-start w-full gap-5">
        <Heading
          firstPart={"WE"}
          secondPart={"ARE SPREADING"}
          isCenter={false}
          isLine={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-20">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <img src={stat.icon} alt={stat?.label} />
              <div>
                <p className="text-3xl font-bold text-secondary">{stat.number}</p>
                <p className="text-primary text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
