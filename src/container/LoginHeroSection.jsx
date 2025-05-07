import React from "react";
import LoginForm from "../components/LoginForm";

const LoginHeroSection = ({ isLogin = true }) => {
  return (
    <div
      className="w-full h-[90vh] px-3 mb-44 pt-5 bg-primary relative text-white bg-center bg-no-repeat bg-cover flex items-start justify-center"
      style={{
        backgroundImage: `url("/assets/banner-bg.png")`,
      }}
    >
      {isLogin ? <LoginForm /> : ""}
      <div className="w-full h-10 absolute -bottom-0 md:bottom-10 lg:bottom-24 !z-[1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LoginHeroSection;
