import React from "react";
import Heading from "../components/Heading";

const MobileAppSection = () => {
  return (
    <section className="bg-[#f1f1f1] flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src="/assets/school_aura_app.jpg"
          alt="Mobile App"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 px-3 md:px-10 lg:px-20 py-10">
        <h2 className="text-2xl md:hidden md:text-4xl font-bold text-secondary mb-4">
          Easy to Access with{" "}
          <span className="text-primary">Mobile APP</span>
        </h2>
        <div className="md:block hidden">
          <Heading
            firstPart={"Easy to Access with"}
            isCenter={false}
            isFlexCol={false}
            secondPart={"Mobile APP"}
          />
        </div>
        <p className="text-gray-700 my-4">
          If you’re looking for easily accessible resources for your classroom,
          then you’re in the right place. Online learning with the Android app
          is very easy to access. That’s why we’ve hand-curated the School Aura
          free app and website. Easy to use and learn!
        </p>
        <p className="text-gray-700 mb-6">
          To learn online, you need to be reasonably comfortable with Smart
          Mobile Phone, Tab, Laptops, and the internet. The advantage of
          learning online via an android app is that you can pause the
          video/audio whenever you need to take notes or simply absorb what has
          been said. Another fantastic feature of online learning is that you
          can re-listen to different parts as needed, which is something you
          can’t do in a live lecture!
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Download Now
        </button>
      </div>
    </section>
  );
};

export default MobileAppSection;
