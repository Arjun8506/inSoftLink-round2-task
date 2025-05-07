import React from "react";
import Button from "./Button";
import InputField from "./InputField";
import Heading from "./Heading";

const Newsletter = () => {
  return (
    <div
      className="bg-[#f1f1f1] text-center px-4 py-8 bg-cover bg-center bg-no-repeat w-[95%] mx-auto absolute -top-[12%] left-1/2 -translate-x-1/2 z-[1]"
      style={{
        backgroundImage: `url("/assets/Clip.png")`,
      }}
    >
      <Heading firstPart={"SUBSCRIBE OUR"} secondPart={"NEWSLETTER"} isCenter={false} />
      <div className="mt-4 flex justify-center items-center gap-2 flex-wrap">
        <InputField placeholder={"Email Address"} type={"email"} />
        <Button
          text={"Subscribe"}
          backgroundColor="bg-primary text-white w-full"
        />
      </div>
    </div>
  );
};

export default Newsletter;
