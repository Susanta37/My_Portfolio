import React, { useState } from "react";

const Card = ({ imageSrc, title, description, link, detailedDescription }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDetailedDescription, setShowDetailedDescription] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleToggleDescription = () => {
    setShowDetailedDescription(!showDetailedDescription);
  };

  return (
    <div
      className={`max-w-xs rounded-[10px] overflow-hidden shadow-md m-4 border-1 border-red-600 bg-gray-700 hover:border-2 hover:border-cyan-600 hover:scale-110 transition-transform duration-300 hover:text-cyan-600 ${
        isFlipped ? "rotate-back" : ""
      }`}
      onClick={handleClick}
    >
     <div
  className={`transform ${
    isFlipped ? "rotateY-180" : ""
  } transition-transform duration-500 ease-in-out`}
>
        <img className="w-full" src={imageSrc} alt="Thumbnail" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-xs mb-2">
            {!isFlipped ? description.substring(0, 80) + "..." : description}
          </p>
        </div>
      </div>
      <div
        className={`transform rotateY-180 ${
          isFlipped
            ? "absolute top-0 left-0 bg-gray-700 w-full h-full px-6 py-4"
            : "hidden"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-xs mb-2">
          {showDetailedDescription ? detailedDescription : description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white hover:text-cyan-600"
        >
          Go to link &rarr;
        </a>
      </div>
      {/* More button */}
      {!isFlipped && (
        <button
          className="absolute bottom-4 right-4 text-xs text-white hover:text-cyan-600 transition duration-300 opacity-0 group-hover:opacity-100"
          onClick={handleToggleDescription}
        >
          {showDetailedDescription ? "Less" : "More"}
        </button>
      )}
    </div>
  );
};

export default Card;
