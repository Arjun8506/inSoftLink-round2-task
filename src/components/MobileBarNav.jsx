import React from "react";
import { FaCaretDown } from "react-icons/fa6";

const MobileBarNav = ({ isMobileMenuOpen, navbarData }) => {
  return (
    <div
      className={`w-40 h-screen lg:hidden overflow-y-auto overflow-x-hidden text-white bg-secondary fixed top-0 z-[5] ${
        isMobileMenuOpen ? "left-0" : "-left-40"
      } transition-all ease-out duration-500 flex flex-col gap-2`}
    >
      {navbarData?.map((item, index) => (
        <li key={index} className="flex flex-col text-sm">
          <button className="flex px-4 py-2 items-center gap-1 hover:text-yellow-300 transition-all ease-in-out duration-200">
            <span>{item?.title}</span>
            {item?.subLinks?.length > 0 && <FaCaretDown />}
          </button>

          <ul className="bg-gray-500 text-black shadow z-10 text-xs ">
            {item?.subLinks?.map((sub, i) => (
              <li
                key={i}
                className="whitespace-nowrap px-4 py-2 text-white hover:text-yellow-300 transition-all ease-linear duration-200 border-b border-[#ff0000]"
              >
                {sub?.title}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </div>
  );
};

export default MobileBarNav;
