import React, { useState } from "react";
import Heading from "../components/Heading";

const data = [
  {
    tab: "School",
    courses: [
      { className: "11th Class", count: "182+" },
      { className: "12th Class", count: "178+" },
      { className: "10th Class", count: "150+" },
      { className: "9th Class", count: "141+" },
      { className: "6th Class", count: "151+" },
      { className: "7th Class", count: "150+" },
      { className: "8th Class", count: "135+" },
      { className: "5th Class", count: "87+" },
    ],
  },
  {
    tab: "Competitive",
    courses: [
      { className: "11th Class", count: "182+" },
      { className: "12th Class", count: "178+" },
      { className: "10th Class", count: "150+" },
      { className: "9th Class", count: "141+" },
      { className: "6th Class", count: "151+" },
      { className: "7th Class", count: "150+" },
      { className: "8th Class", count: "135+" },
      { className: "5th Class", count: "87+" },
      { className: "9th Class", count: "141+" },
      { className: "6th Class", count: "151+" },
      { className: "7th Class", count: "150+" },
      { className: "8th Class", count: "135+" },
      { className: "5th Class", count: "87+" },
    ],
  },
  {
    tab: "Enterance",
    courses: [
      { className: "11th Class", count: "182+" },
      { className: "12th Class", count: "178+" },
      { className: "10th Class", count: "150+" },
      { className: "9th Class", count: "141+" },
      { className: "6th Class", count: "151+" },
    ],
  },
  {
    tab: "Tutors",
    courses: [],
  },
];

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState("School");

  const selectedCourses = data?.find(
    (item) => item?.tab === activeTab
  )?.courses;

  return (
    <section className="py-10 lg:pt-60 lg:max-w-4xl lg:mx-auto">
      <div className="w-full px-3">
        <Heading
          firstPart={"Provide"}
          isCenter={false}
          secondPart={"Best Educational"}
        />
      </div>

      <div className="mt-6 flex flex-col lg:flex-row bg-white overflow-hidden testimonialCard">
        <div className="lg:w-1/4 flex flex-nowrap lg:flex-col bg-gray-100 border-r">
          {data?.map((item) => (
            <div
              key={item?.tab}
              onClick={() => setActiveTab(item?.tab)}
              className={`px-6 py-4 text-center w-[25%] lg:w-full overflow-hidden cursor-pointer text-xs font-medium ${
                activeTab === item?.tab
                  ? "bg-white border-l-4 border-orange-500 text-black"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
            >
              {item?.tab}
            </div>
          ))}
        </div>

        <div className="lg:w-3/4 w-full h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-3 pb-0 gap-y-3 ">
          {selectedCourses?.length > 0 ? (
            <>
              {selectedCourses?.map((item, idx) => (
                <div key={idx} className="border h-fit flex items-center gap-3">
                  <div className="entrance-img">
                    <h1>N</h1>
                  </div>
                  <div>
                    <p className="text-primary font-semibold text-sm">
                      {item.className}
                    </p>
                    <p className="text-xs text-gray-500">{item.count}</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h4 className="text-center text-2xl col-span-2 lg:col-end-4 py-2">
              Coming Soon
            </h4>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
