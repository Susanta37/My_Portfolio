import React from "react";
import NavBar from "../Component/NavBar";
import { useEffect, useState } from "react";
import bg from "./../assets/bg.png";
import {SiBlockchaindotcom} from 'react-icons/si'
import Card from "../Component/Card";

const TypingText = ({ textArray }) => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const maxLength = Math.max(...textArray.map((text) => text.length));

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(
        textArray[currentTextIndex].substring(0, index).padEnd(maxLength, " ")
      );
      index++;
      if (index > textArray[currentTextIndex].length) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentTextIndex(
            (prevIndex) => (prevIndex + 1) % textArray.length
          );
          setTypedText(""); // Reset typed text
        }, 1000); // Delay before starting the next text
      }
    }, 100); // Adjust typing speed here (milliseconds)
    return () => clearInterval(timer);
  }, [currentTextIndex, maxLength, textArray]);

  return <span className="text-red-600">{typedText}</span>;
};

const Carrear = () => {
  const staticText = " Please wait...,  have patience...   , i will be back...  , You Can  still access all  my projects excpect this section. , Go back...";
  const textArray = staticText.split(", ");

  // const [isPostGraduationDetailsVisible, setPostGraduationDetailsVisibility] = useState(true);
  // const [isGraduationDetailsVisible, setGraduationDetailsVisibility] = useState(true);
  // const [isBachelorDetailsVisible, setBachelorDetailsVisibility] = useState(true);
  

  // const togglePostGraduationDetails = () => {
  //   setPostGraduationDetailsVisibility(!isPostGraduationDetailsVisible);
  // };
  // const toggleGraduationDetails = () => {
  //   setGraduationDetailsVisibility(!isGraduationDetailsVisible);
  // };
  // const toggleBachelorDetails = () => {
  //   setBachelorDetailsVisibility(!isBachelorDetailsVisible);
  // };

  return (
    
    <div className="flex flex-col md:flex-row">
      <div
        style={{ flex: "1" }}
        className="bg-gray-400 text-center flex justify-end items-center"
      >
        <p className="mb-4"></p>
        <img src={bg} alt="bg" className="self-end transform scale-x-[-1]" />
      </div>
      <div
        style={{ flex: "1" }}
        className="bg-black rounded shadow-md text-white text-center w-screen flex justify-start border border-black border-opacity-50"
      >
        
        <div className="flex flex-col justify-center items-center w-full md:w-auto h-full md:h-auto pt-20">
       
          {/* Adjusted Card Size */}
          <div className="w-full md:w-64 ">
        
            <Card
              imageSrc={""}
              title="MERN Project"
              description="A full modern Movie website crafted with the MERN stack, offering a seamless experience for movie enthusiasts to explore and discover their favorite films and TV shows,Built from the ground up, this Movie website integrates with The Movie DB API to provide users with an extensive collection of movies and TV shows. Utilizing the latest web technologies, including React for the frontend and Node.js for the backend, this project demonstrates proficiency in full-stack development. For More details Click the arrow"
            />
          </div>
          <div className="w-full md:w-64 pt-4">
            {/* Adjusted Card Size */}
            <Card
              imageSrc={""}
              title="MERN Project"
              description="A full modern Movie website crafted with the MERN stack, offering a seamless experience for movie enthusiasts to explore and discover their favorite films and TV shows,Built from the ground up, this Movie website integrates with The Movie DB API to provide users with an extensive collection of movies and TV shows. Utilizing the latest web technologies, including React for the frontend and Node.js for the backend, this project demonstrates proficiency in full-stack development. For More details Click the arrow"
            />
            <br />
            <Card
              imageSrc={""}
              title="MERN Project"
              description=""
            />
            
        
          </div>
        </div>
      </div>
  
      
      <p className="absolute top-0 left-0  text-center items-center w-screen h-20 font-extrabold text-[30px] shadow-md p-3">
        {/* <span className=" text-black pl-1"> Service</span> <span>I provide</span> */}
        <h1 className="text-[30px] text-white">
          This Page is Still In development stage 😉.. i will update it soon <br />
          <span className="text-red-600 ">
            <TypingText textArray={textArray} />
          </span>

        </h1>
      </p>
    </div>
  );
};

export default Carrear;

