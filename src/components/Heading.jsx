import React from "react";

const Heading = ({
  isFlexCol = true,
  isCenter = true,
  firstPart,
  secondPart = null,
  isLine = false,
}) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2
        className={`flex ${isFlexCol ? "flex-col" : "flex-row"} ${
          isCenter ? "items-center" : "items-start"
        } gap-2`}
      >
        <span className="text-secondary">{firstPart}</span>
        {secondPart !== null && (
          <span className="text-primary">{secondPart}</span>
        )}
      </h2>
      {isLine && <div className="w-[7.5rem] h-[1px] bg-secondary"></div>}
    </div>
  );
};

export default Heading;
