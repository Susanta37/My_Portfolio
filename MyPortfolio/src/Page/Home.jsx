import React, { useState, useEffect } from "react";
import NavBar from "../Component/NavBar";
import hero1 from "./../assets/hero1.png";
import cv from "./../assets/cv.pdf";
import Card from "../Component/Card";
import banner from "./../assets/banner.png";
import banner2 from "./../assets/banner2.png";
import banner3 from "./../assets/banner3.png";
import ocac from "./../assets/ocac.png";
import WB from "./../assets/webBocket.png";
import QS from "./../assets/Qspider.png";
import OKCL from "./../assets/Okcl.png";
import LineCard from "../Component/LineCard";
// import { FcGoogle } from "react-icons/fc";
import {
  SiCreatereactapp,
  SiHtml5,
  SiAndroidstudio,
  SiFigma,
  SiFlutter,
  SiJavascript,
  SiArduino,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiGmail,
  SiYoutube,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";
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

//download cv functionality
const handleDownloadCV = () => {
  // Create a link element
  const link = document.createElement("a");
  // Set the href attribute to the path of your CV file
  link.href = cv;
  // Set the download attribute to force the browser to download the file
  link.download = "cv.pdf";
  // Append the link to the document body
  document.body.appendChild(link);
  // Programmatically trigger the click event on the link
  link.click();
  // Remove the link from the document body
  document.body.removeChild(link);
};

const Home = () => {
  const staticText =
    "Software Engineer, Programmer, MERN Developer, Graphic designer, mobile apps Developer";
  const textArray = staticText.split(", ");

  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <div
        id="home"
        className="flex flex-col justify-center items-center w-screen mt-15 not-selectable"
      >
        <div className="relative w-[150px] h-[150px] md:relative md:w-[200px] md:h-[200px] mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={hero1}
              alt=""
              className="rounded-full w-full h-full border-4 border-purple-700 hover:border-red-700 shadow-neon-blue p-1 transform scale-100 transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="text-center p-10 ">
          <div className="h-2 md:h-20  not-selectable">
            <h1 className="text-2xl font-bold md:text-5xl md:font-bold md:m-5 ">
              <span className=" font-sans">
                I'm{" "}
                <span className=" font-serif not-selectable text-red-600">
                  SUSANTA SWAIN
                </span>{" "}
                and I'm a
              </span>{" "}
              <br />
              <span className="text-red-600 ">
                <TypingText textArray={textArray} />
              </span>
            </h1>
          </div>

          <div className="mt-20 p-2 text-center font-bold md:font-bold md:m-5 md:w-[900px] not-selectable">
            <p>
              I am a seasoned full-stack software engineer with over 1 years of
              professional experience, specializing in backend development. My
              expertise lies in crafting robust and scalable SaaS-based
              architectures.
            </p>
          </div>
          <div
            className="mt-10 p-2 text-center justify-between "
            draggable="false"
          >
            <button className=" rounded-full border border-red-500 text-black bg-white hover:bg-red-800 hover:border-black hover:text-white hover:scale-110 transition-transform duration-300 mr-4">
              Get in Touch
            </button>
            <button
              className="rounded-full border border-red-800 text-red-700 hover:bg-red-600 hover:text-white hover:border-black hover:scale-110 transition-transform duration-300"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* //Project */}

      <div id="project" className=" mt-2">
        <h2
          className="text-gray-500 font-semibold text-2xl text-center not-selectable"
          draggable="false"
        >
          EXPERIENCED WITH
        </h2>
        <div className="flex justify-center mt-10 flex-wrap" draggable="false">
  <SiCreatereactapp className="icon text-gray-500 text-2xl mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
  <SiHtml5 className="icon text-gray-500 text-2xl mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
  <SiFlutter className="icon text-gray-500 text-2xl mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
  <SiAndroidstudio className="icon text-gray-500 text-2xl mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
  <SiFigma className="icon text-gray-500 text-2xl mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
  <SiJavascript className="icon text-gray-500 text-2xl mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
  <SiAdobephotoshop className="icon text-gray-500 text-2xl mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
  <SiAdobepremierepro className="icon text-gray-500 text-2xl mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
  <SiArduino className="icon text-gray-500 text-2xl mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
  <SiTailwindcss className="icon text-gray-500 text-2xl mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
</div>


        <div
          className=" text-center text-red-600 mt-20 font-bold not-selectable"
          draggable="false"
        >
          <h1 className="text-[30px] text-red-600 md:''">PROJECTS</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-20">
          <Card
            imageSrc={banner}
            title="MERN Project"
            description="A full stack application built using the MERN"
          />
          <Card
            imageSrc={banner2}
            title="Flutter Project"
            description="A Simple Calculator"
          />
          <Card
            imageSrc={banner3}
            title="HTML5"
            description="A Complete Notes on HTML 5"
          />
        </div>
      </div>

      {/* Experience  */}

      <div id="experience">
        {/* <div className="text-center  mt-12 font-bold not-selectable">
          <h1 className="text-cyan-600">EXPERIENCE</h1>
          <div className="flex items-center justify-center mt-10">
            <img
              src={ocac}
              className="rounded-full h-[60px] w-[60px] mr-4"
              alt="Company Logo"
            />
            <p>
              Experience at Odisha Computer Application Centre (OCCAC) of Full
              stack JAVA software Development
            </p>
          </div>


          <div className="flex items-center justify-center mt-5">
            <img
              src={ocac}
              className="rounded-full h-[60px] w-[60px] mr-4"
              alt="Company Logo"
            />
            <p>
              Experience at Odisha Computer Application Centre (OCCAC) of Full
              stack JAVA software Development
            </p>
          </div>

          <div className="flex items-center justify-center mt-5">
            <img
              src={ocac}
              className="rounded-full h-[60px] w-[60px] mr-4"
              alt="Company Logo"
            />
            <p>
              Experience at Odisha Computer Application Centre (OCCAC) of Full
              stack JAVA software Development
            </p>
          </div>
        </div> */}

        <div className="text-center mt-20 font-bold not-selectable mb-10">
          <h1 className="text-[30px] text-cyan-600 md:text-cyan-600 ">
            EXPERIENCE
          </h1>
          <div className="mt-20">
            <LineCard
              imageSrc={ocac}
              description="OCAC      (01-02-2022 -  01-02-2023)"
              details="Experience at Odisha Computer Application Centre (OCCAC) of Full stack JAVA software Development"
            />
            <LineCard
              imageSrc={WB}
              description=" WEBBOCKET (01-02-2022 -  01-02-2023) "
              details="Learn MERN stack from Experts In WEB Bocket"
            />
            <LineCard
              imageSrc={QS}
              description="Q SPiders (01-02-2022 -  01-02-2023)"
              details="Experience at Odisha Computer Application Centre (OCCAC) of Full stack JAVA software Development"
            />
            <LineCard
              imageSrc={OKCL}
              description="OKCL (01-02-2022 -  01-02-2023)"
              details="Experience at Odisha Computer Application Centre (OCCAC) of Full stack JAVA software Development"
            />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div
  id="contact"
  className="flex justify-center pt-[150px] bg-gray-800"
>
  <div className="w-full md:w-[900px] px-10 md:''">
    <h1 className="text-white font-bold mb-2">Contact Me</h1>
    <div className="flex gap-2 ">
      {" "}
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
        <SiGmail className="icon text-gray-500 text-2xl mx-2 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
      </a>
      <a href="https://youtube.com/@IdeaIlluminato?si=FoNM7Rv8hDPC5ZEq">
        <SiYoutube className="icon text-gray-500 text-2xl mx-2 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
      </a>
      <a href="https://www.instagram.com/susant_37">
        <SiInstagram className="icon text-gray-500 text-2xl mx-2 hover:scale-150 hover:text-red-600 transition-transform duration-300"/>
      </a >
      <a href="https://www.facebook.com/Susanta_swain">
        <SiFacebook className="icon text-gray-500 text-2xl mx-2 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
      </a>
    </div>

    <p className="text-white mt-10 mb-10">
      Seasoned Full Stack Software Engineer with over 2 years of hands-on
      experience in designing and implementing robust, scalable, and innovative
      web solutions. Adept at leveraging a comprehensive skill set encompassing
      front-end and back-end technologies.
    </p>
  </div>
</div>

    </div>
  );
};

export default Home;
