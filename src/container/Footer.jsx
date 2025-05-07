import React from "react";
import Newsletter from "../components/Newsletter";
import FooterInfo from "../components/FooterInfo";

const Footer = () => {
  return (
    <div>
      <Newsletter />
      <FooterInfo />
      <div className="bg-tertiary text-gray-400 text-sm py-4 px-4 flex flex-col md:flex-row justify-between items-center">
        <p>2021 © SchoolAura. All Right Reserved</p>
        <p>
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
