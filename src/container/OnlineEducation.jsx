import React from "react";
import Heading from "../components/Heading";

const OnlineEducation = () => {
  return (
    <section className="bg-white py-12 px-0 md:px-10">
      <div className="md:max-w-7xl px-3 w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Heading
            firstPart={"Benefits of"}
            isLine={true}
            secondPart={"Online Education"}
            isCenter={false}
          />
          <p className="text-gray-700 my-4">
            Online Education increases engagement by adding a human element.
            Studying in the comfort of your own home is convenient, but there
            are various other advantages of online study. It's especially
            beneficial for students who aren't as self-sufficient or who are
            used to the traditional educational model of "teacher and class."
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Time and Location Flexibility</li>
            <li>Find Unlimited Course Category</li>
            <li>No Need to Carry Books</li>
            <li>Get Access in any mobile, Tab, Laptop with your credential</li>
            <li>Use your time when you are traveling, Outing and free time</li>
            <li>Exam Practice before exam</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/spreading.png"
            alt="Thumbs Up Man"
            className="w-[50%] md:max-w-sm"
          />
        </div>
      </div>

      <div
        className="bg-secondary text-white py-6 px-4 grid grid-cols-2 md:grid-cols-4 text-center bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: `url("/assets/Clip.png")`,
        // }}
      >
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
