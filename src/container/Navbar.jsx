import { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import TopHeader from "../components/TopHeader";
import Button from "../components/Button";
import { FaHamburger, FaSchool } from "react-icons/fa";
import MobileBarNav from "../components/MobileBarNav";
import { IoMenu } from "react-icons/io5";

const navbarData = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Exam Solution",
    subLinks: [
      {
        title: "1st-12th Exam",
        href: "/",
      },
      {
        title: "Competitive Exam",
        href: "/",
      },
      {
        title: "Entrance Exam",
        href: "/",
      },
    ],
  },
  {
    title: "Online Study",
    subLinks: [
      {
        title: "1st-12th Exam",
        href: "/",
      },
      {
        title: "Competitive Exam",
        href: "/",
      },
      {
        title: "Entrance Exam",
        href: "/",
      },
    ],
  },
  {
    title: "Tutor Session",
    subLinks: [
      {
        title: "Find Tutor",
        href: "/",
      },
      {
        title: "Become Tutor",
        href: "/",
      },
    ],
  },
  {
    title: "Blogs",
    href: "/",
  },
  {
    title: "Contact Us",
    href: "/",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const menuRef = useRef();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle-btn")
      ) {
        setisMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <TopHeader />
      <nav className="bg-primary text-white h-auto">
        <div className="flex justify-between items-start flex-wrap">
          <div className="flex items-center relative">
            <a href="/">
              <img
                src="/assets/logo_school.png"
                alt="SchoolAura Logo"
                className="h-8 w-auto z-[1] absolute top-3 lg:left-20 left-3"
              />
            </a>
            <img
              src="/assets/logo-cloud.png"
              alt="SchoolAura Logo background"
              className="h-20 object-contain md:h-full w-auto -ml-6 -mt-2"
            />
          </div>

          <ul className="hidden md:flex gap-3 items-center text-[16px] lg:pr-20 lg:pt-2">
            {navbarData?.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => toggleMenu(item?.title)}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-all ease-in-out duration-200">
                  <span>{item?.title}</span>
                  {item?.subLinks?.length > 0 && <FaCaretDown />}
                </button>

                {item?.subLinks?.length > 0 && openMenu === item?.title && (
                  <ul className="absolute top-full left-0 bg-[#b33c05] border border-[#ff0000] text-black shadow z-10 text-xs rounded">
                    {item?.subLinks?.map((sub, i) => (
                      <li
                        key={i}
                        className="whitespace-nowrap px-4 py-2 text-white hover:text-yellow-300 transition-all ease-linear duration-200 border-b border-[#ff0000]"
                      >
                        {sub?.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Button
                text={"School Management"}
                Icon={FaSchool}
                hover={
                  "hover:text-yellow-300 transition-all ease-in-out duration-200 px-2"
                }
                rounded={"rounded"}
              />
            </li>
          </ul>

          <button
            onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1 bg-white text-secondary mr-3 mt-1 rounded"
          >
            <IoMenu size={25} />
          </button>
        </div>
        {isMobileMenuOpen && (
          <div ref={menuRef} className="">
            <MobileBarNav
              isMobileMenuOpen={isMobileMenuOpen}
              navbarData={navbarData}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
