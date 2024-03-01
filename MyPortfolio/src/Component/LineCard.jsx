import React, { useState } from "react";

const LineCard = ({ imageSrc, description, details }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-5 hover:scale-110 hover:text-red-600 transition-transform duration-300" onClick={handleClick}>
      <img
        src={imageSrc}
        className="rounded-full h-[30px] w-[30px] md:h-[60px] md:w-[60px] mb-2 md:mb-0 mr-0 md:mr-5 cursor-pointer"
        alt="Company Logo"
      />
      <div>
        <h2 className="cursor-pointer font-bold text-sm md:text-base mb-1 md:mb-0">{description}</h2>
        {showDescription && <p className="text-gray-500 text-sm md:text-base mt-1 md:mt-0">{details}</p>}
      </div>
    </div>
  );
};

export default LineCard;
