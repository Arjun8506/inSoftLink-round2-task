import React from "react";
import Newsletter from "../components/Newsletter";
import FooterInfo from "../components/FooterInfo";

const Footer = () => {
  return (
    <div className=" relative">
      <Newsletter />
      <FooterInfo />
      <div className="bg-tertiary text-white py-6 pb-8 px-6 gap-5 flex flex-row justify-between items-center text-xs">
        <p className="text-center">2021 © SchoolAura. All Right Reserved</p>
        <p className="text-center">
          Design & Development by{" "}
          <a href="#" className="text-blue-400">
            Insoftlink Software
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
