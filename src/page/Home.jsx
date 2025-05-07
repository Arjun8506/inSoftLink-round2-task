import React from "react";
import OnlineStudySection from "../container/OnlineStudySection";
import CourseSection from "../container/CourseSection";
import MobileAppSection from "../container/MobileAppSection";
import OnlineEducation from "../container/OnlineEducation";
import StatsSection from "../container/StatsSection";
import VisitCampus from "../container/VisitCampus";
import TestimonialSlider from "../container/TestimonialSlider";
import HeroSection from "../container/HeroSection";

const Home = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <OnlineStudySection />
      <CourseSection />
      <MobileAppSection />
      <OnlineEducation />
      <StatsSection />
      <VisitCampus />
      <TestimonialSlider />
    </main>
  );
};

export default Home;
