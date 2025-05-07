import React from "react";

const Heading = ({
  isFlexCol = true,
  isCenter = true,
  firstPart,
  secondPart = null,
  isLine = false,
}) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <h2
        className={`text-2xl lg:text-4xl tracking-tight font-bold flex ${isFlexCol ? "flex-col" : "flex-row !gap-2"} ${
          isCenter ? "items-center" : "items-start"
        } !gap-0`}
      >
        <span className="text-secondary text-center lg:text-start">{firstPart}</span>
        {secondPart !== null && (
          <span className="text-primary">{secondPart}</span>
        )}
      </h2>
      {isLine && <div className="w-[7.5rem] h-[1px] bg-secondary"></div>}
    </div>
  );
};

export default Heading;
