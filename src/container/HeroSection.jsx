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
    <section className="bg-primary relative text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2">
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
    </section>
  );
};

export default HeroSection;
