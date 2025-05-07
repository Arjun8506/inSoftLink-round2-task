import React from "react";
import Button from "./Button";
import InputField from "./InputField";
import Heading from "./Heading";

const Newsletter = () => {
  return (
    <div
      className="bg-[#f1f1f1] text-center px-4 py-8 bg-cover bg-center bg-no-repeat w-[95%] mx-auto md:max-w-4xl md:flex md:items-center md:justify-around absolute -top-[12%] md:-top-[25%] left-1/2 -translate-x-1/2 z-[1]"
      style={{
        backgroundImage: `url("/assets/Clip.png")`,
      }}
    >
      <Heading firstPart={"SUBSCRIBE OUR"} secondPart={"NEWSLETTER"} isCenter={false} />
      <div className="mt-4 lg:mt-0 flex justify-center items-center gap-2 flex-wrap lg:flex-nowrap lg:gap-0 lg:w-1/2">
        <InputField placeholder={"Email Address"} type={"email"} />
        <Button
          text={"Subscribe"}
          backgroundColor="bg-primary text-white w-full lg:w-fit text-sm lg:px-2 lg:rounded"
        />
      </div>
    </div>
  );
};

export default Newsletter;
