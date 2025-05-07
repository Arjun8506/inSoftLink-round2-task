import React from "react";

const MobileAppSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="/assets/school_aura_app.jpg"
          alt="Mobile App"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d0c2a] mb-4">
          Easy to Access with{" "}
          <span className="text-orange-500">Mobile APP</span>
        </h2>
        <p className="text-gray-700 mb-4">
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
