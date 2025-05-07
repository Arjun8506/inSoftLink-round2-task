import React from "react";
import InfoCard from "../components/InfoCard";
import LoginForm from "../components/LoginForm";

const cardData = [
  { title: "ENTRANCE Solution", buttons: ["Exam", "Courses"] },
  { title: "COMPETITIVE Solution", buttons: ["Exam", "Courses"] },
  { title: "KG - 12ᵗʰ SCHOOL", buttons: ["Exam", "Courses"] },
  { title: "TUTOR SOLUTION", buttons: ["Find Tutors", "Become Tutor"] },
];

const HeroSection = () => {
  return (
    <section
      className="bg-primary relative text-white bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("/assets/banner-bg.png")`,
      }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-20 grid md:grid-cols-3 gap-10 items-start ">
        <div className="md:col-span-2 order-2 lg:order-1">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="text-white">BE A </span>
              <span className="text-black">SMART STUDENT</span>
            </h1>
            <p className="text-lg">SchoolAura Is A Smart Education Platform</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cardData.map((card, index) => (
              <InfoCard key={index} title={card.title} buttons={card.buttons} />
            ))}
          </div>
        </div>
        <LoginForm />
      </div>
      <div className="w-full h-10 absolute -bottom-0 lg:bottom-20 !z-[1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
