import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import TopHeader from "../components/TopHeader";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };
  return (
    <>
      <TopHeader />
      <nav className="bg-primary text-white h-auto">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center relative">
            <img
              src="/assets/logo_school.png"
              alt="SchoolAura Logo"
              className="h-8 w-auto z-[1] absolute top-3 left-3"
            />
            <img
              src="/assets/logo-cloud.png"
              alt="SchoolAura Logo background"
              className="h-20 object-contain md:h-full w-auto -ml-6 -mt-2"
            />
          </div>

          <ul className="hidden md:flex space-x-6 items-center font-semibold">
            <li className="relative">
              <button
                onClick={() => toggleMenu("exam")}
                className="flex items-center space-x-1"
              >
                <span>Exam Solution</span>
                <FaCaretDown />
              </button>
              {openMenu === "exam" && (
                <ul className="absolute top-full mt-2 left-0 bg-white text-black shadow z-10 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    1<sup>st</sup>-12<sup>th</sup> Exam
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    Competitive Exam
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">Entrance Exam</li>
                </ul>
              )}
            </li>

            <li>Tutor Solution</li>
            <li>Online Study</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>

          <button className="bg-black text-white px-3 py-1 rounded text-sm mt-2 md:mt-0 lg:block hidden">
            School Management
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
