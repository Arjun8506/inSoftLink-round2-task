import React from "react";

const StatsSection = () => {
  const stats = [
    {
      icon: "🎓", // You can replace with an actual icon or use an image
      number: "108+",
      label: "Happy School",
    },
    {
      icon: "👪",
      number: "5360+",
      label: "Happy Parents",
    },
    {
      icon: "🎓",
      number: "58030+",
      label: "Students",
    },
    {
      icon: "👨‍🏫",
      number: "10+",
      label: "Happy Tutors",
    },
  ];
  return (
    <section className="bg-white py-10 px-4 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Image Section */}
      <div className="max-w-md">
        <img
          src="https://i.imgur.com/5QFh6kG.png" // Replace with your real image URL
          alt="Teacher"
          className="w-full rounded-md"
        />
      </div>

      {/* Right Stats Section */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl font-bold text-black mb-6">
          WE <span className="text-orange-500">ARE SPREADING</span>
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="text-4xl">{stat.icon}</div>
              <div>
                <p className="text-2xl font-bold text-black">{stat.number}</p>
                <p className="text-orange-500 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
