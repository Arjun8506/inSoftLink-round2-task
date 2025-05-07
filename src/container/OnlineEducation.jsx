import React from "react";

const OnlineEducation = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-[#0c0c24]">
            Benefits of <span className="text-[#f55900]">Online Education</span>
          </h2>
          <hr className="my-4 w-16 border-[#f55900]" />
          <p className="text-gray-700 mb-6">
            Online Education increases engagement by adding a human element.
            Studying in the comfort of your own home is convenient, but there
            are various other advantages of online study. It's especially
            beneficial for students who aren't as self-sufficient or who are
            used to the traditional educational model of "teacher and class."
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Time and Location Flexibility</li>
            <li>Find Unlimited Course Category</li>
            <li>No Need to Carry Books</li>
            <li>Get Access in any mobile, Tab, Laptop with your credential</li>
            <li>Use your time when you are traveling, Outing and free time</li>
            <li>Exam Practice before exam</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/thumbs-up-man.png" // Replace with actual image path
            alt="Thumbs Up Man"
            className="max-w-xs md:max-w-sm"
          />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-[#0c0c24] text-white mt-10 py-6 px-4 grid grid-cols-2 md:grid-cols-4 text-center">
        <div>
          <p className="text-2xl font-bold">10000+</p>
          <p className="text-[#f55900] font-medium">Total Exams</p>
        </div>
        <div>
          <p className="text-2xl font-bold">600+</p>
          <p className="text-[#f55900] font-medium">Courses</p>
        </div>
        <div>
          <p className="text-2xl font-bold">3000+</p>
          <p className="text-[#f55900] font-medium">Success Stories</p>
        </div>
        <div>
          <p className="text-2xl font-bold">4.5/5</p>
          <p className="text-[#f55900] font-medium">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default OnlineEducation;
