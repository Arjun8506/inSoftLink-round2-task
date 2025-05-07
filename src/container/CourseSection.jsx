import React, { useState } from "react";

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

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-[#0d0c2a] uppercase">
        Provide <span className="text-orange-500">Best Educational</span>
      </h2>

      <div className="mt-6 flex bg-white shadow-md rounded-md overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 border-r">
          {data?.map((item) => (
            <div
              key={item?.tab}
              onClick={() => setActiveTab(item?.tab)}
              className={`px-6 py-4 cursor-pointer text-sm font-medium ${
                activeTab === item?.tab
                  ? "bg-white border-l-4 border-orange-500 text-black"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
            >
              {item?.tab}
            </div>
          ))}
        </div>

        <div className="w-3/4 p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data
            ?.find((item) => item?.tab === activeTab)
            ?.courses?.map((item, idx) => (
              <div
                key={idx}
                className="border rounded-md p-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center text-lg font-bold">
                  N
                </div>
                <div>
                  <p className="text-primary font-semibold text-sm">
                    {item.className}
                  </p>
                  <p className="text-xs text-gray-500">{item.count}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
