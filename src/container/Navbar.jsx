import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };
  return (
    <nav className="bg-[#f55900] text-white px-4 py-2">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="SchoolAura Logo" className="h-10 w-auto" />
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

        <button className="bg-black text-white px-3 py-1 rounded text-sm mt-2 md:mt-0">
          School Management
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
