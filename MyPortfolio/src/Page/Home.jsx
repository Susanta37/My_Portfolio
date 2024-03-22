import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import FeedbackForm from "../Component/FeedbackForm";
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
    "Software Engineer, Programmer, MERN Developer, Graphic designer, Mobile Apps Developer";
  const textArray = staticText.split(", ");

  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <div
        id="home"
        className="flex flex-col justify-center items-center w-full mt-15 not-selectable"
      >
        <div className="relative w-[150px] h-[150px] md:relative md:w-[200px] md:h-[200px] mb-8">
          <div className="absolute inset-0 flex items-center justify-center pt-1">
            <img
              src={hero1}
              alt=" "
              draggable="false"
              className="rounded-full w-full h-full border-4 border-cyan-400 hover:border-red-700 shadow-neon-blue p-1 transform scale-100 transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="text-center p-10 ">
          <div className="h-2 md:h-20  not-selectable">
            <h1 className="text-2xl font-bold md:text-5xl md:font-bold md:m-5 text-white ">
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

          <div className="mt-20 p-2 text-center text-gray-200 hover:scale-110 font-bold md:font-bold md:m-5 md:w-[900px] not-selectable transition-transform duration-300">
          <div>
  <p>
    With a focus on continuous learning and staying at the forefront
    of emerging technologies, I am constantly striving to push the
    boundaries of what's possible in software engineering. "From
    developing user-friendly interfaces to optimizing backend systems
    for peak performance, I am committed to delivering solutions that
    are both functional and elegant.
  </p>
</div>

          </div>
          <div
            className="mt-10 p-2 text-center justify-between "
            draggable="false"
          >
            <Link to="/carrear">
              <button className="pl-6 pr-6 rounded-full border border-red-500 text-black bg-white hover:bg-red-500 hover:border-red-400 hover:text-white hover:scale-110 transition-transform duration-300 mr-4">
                My Career
              </button>
            </Link>
            <button
              className="rounded-full border border-black text-black hover:bg-red-400 hover:text-white bg-red-500 hover:border-red-300 hover:scale-110 transition-transform duration-300"
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
          className="text-red-600  font-bold text-[30px] text-center not-selectable"
          draggable="false"
        >
          EXPERIENCED WITH
        </h2>
        <div className="flex justify-center mt-10 flex-wrap" draggable="false">
          <SiCreatereactapp className="icon text-gray-500 text-2xl md:text-[50px] mx-2 my-1 md:my-0 md:mx-3  hover:scale-150 hover:text-red-600 transition-transform duration-300" />
          <SiHtml5 className="icon text-gray-500 text-2xl md:text-[50px] mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
          <SiFlutter className="icon text-gray-500 text-2xl md:text-[50px] mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
          <SiAndroidstudio className="icon text-gray-500 text-2xl  md:text-[50px] mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
          <SiFigma className="icon text-gray-500 text-2xl md:text-[50px] mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
          <SiJavascript className="icon text-gray-500 text-2xl md:text-[50px] mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
          <SiAdobephotoshop className="icon text-gray-500 text-2xl md:text-[50px] mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
          <SiAdobepremierepro className="icon text-gray-500 text-2xl md:text-[50px] mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
          <SiArduino className="icon text-gray-500 text-2xl md:text-[50px] mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
          <SiTailwindcss className="icon text-gray-500 text-2xl md:text-[50px] mx-2 my-1 md:my-0 md:mx-3 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
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
            description="A full modern Movie website crafted with the MERN stack, offering a seamless experience for movie enthusiasts to explore and discover their favorite films and TV shows,Built from the ground up, this Movie website integrates with The Movie DB API to provide users with an extensive collection of movies and TV shows. Utilizing the latest web technologies, including React for the frontend and Node.js for the backend, this project demonstrates proficiency in full-stack development. For More details Click the arrow"
          />
          <Card
            imageSrc={banner2}
            title="Flutter Project"
            description="My Flutter calculator project showcases a sleek and intuitive interface designed with Flutter's stateless widgets. Offering basic arithmetic operations, it ensures precise calculations while prioritizing user experience. Rigorous testing guarantees reliability, while future plans include integrating scientific functions and enhancing UI design. This project reflects my expertise in Flutter development and commitment to delivering efficient and user-friendly applications."
          />
          <Card
            imageSrc={banner3}
            title="HTML5"
            description="A Complete Notes on HTML 5"
          />
        </div>
      </div>

      {/* Experience  */}

      <div id="experience" className="m-10">
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
              description="OCAC   (01-06-2023 -  12-09-2023)"
              details="Experience at Odisha Computer Application Centre (OCAC) of Full stack JAVA software Development Developed a window-based application named  SmartTestX using Java programming language.
              Implemented both frontend and backend functionalities to ensure a seamless user experience.
              Designed and integrated features using Java Swing for the graphical user interface (GUI).
              Utilized Oracle database for backend data management and ensured data integrity.
              Collaborated with a team to deliver high-quality software solutions within project timelines.
              Troubleshooted and debugged issues, ensuring optimal performance and functionality.
              Engaged in the entire software development lifecycle, from concept and design to testing and deployment."
            />
            <LineCard
              imageSrc={WB}
              description=" WEBBOCKET (15-11-2023 -  20-02-2023) "
              details="My journey at Web Bocket was nothing short of transformative as I delved deep into the realms of modern web development, honing my skills in MongoDB, Express.js, React.js, and Node.js (MERN). Learning from industry professionals engaged in real-world projects provided me with hands-on experience and invaluable insights"
            />
            <LineCard
              imageSrc={QS}
              description="Q SPiders (11-12-2023 - 11-05-2024)"
              details="QSpiders provided me with a conducive learning environment where I could explore the intricacies of Java programming in detail. The knowledgeable faculty members guided me through core and advanced Java concepts, ensuring that I gained a solid understanding of the language"
            />
            <LineCard
              imageSrc={OKCL}
              description="OKCL (15-01-2024 -  Continue.)"
              details="Experience at Odisha Knowledge Corporation Limited (OKCL)

              I had the privilege of being engaged as an Apprentice at Odisha Knowledge Corporation Limited (OKCL), an esteemed organization dedicated to fostering learning and technological advancement. This opportunity aligned seamlessly with my pursuit of a Master of Computer Applications (M.C.A) degree, further enhancing my academic journey with practical experience in the field.
              
              Duration: 15th January, 2024 – 14th January, 2025
              
              Roles and Responsibilities:
              
              Training Tasks Completion: Diligently completed all assigned training tasks and activities, enriching my knowledge and skills in software development.
              
              Adoption of New Technologies: Learned and implemented emerging technologies in software development and deployment under the guidance of experienced professionals.
              
              Version Control and Security Practices: Acquired proficiency in version control systems and IT security practices, ensuring adherence to industry standards.
              
              Project Contributions: Successfully contributed to various projects by completing assigned tasks and project-related activities.
              
              Throughout my tenure as an Apprentice at OKCL, I embraced every opportunity to learn and grow, actively performing roles and responsibilities assigned by my reporting authority and project managers."
            />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="flex justify-center pt-[120px] bg-gray-800">
        <div className="w-full md:w-[900px] px-3 md:''">
          <h3 className="text-white font-bold text-center text-4xl mb-6 not-selectable">
            Contact Me
          </h3>
          <FeedbackForm />
          <div className="flex gap-2 pt-10">
            {" "}
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <SiGmail className="icon text-gray-500 text-[20px] mx-2 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
            </a>
            <a href="https://youtube.com/@IdeaIlluminato?si=FoNM7Rv8hDPC5ZEq">
              <SiYoutube className="icon text-gray-500 text-[20px] mx-2 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
            </a>
            <a href="https://www.instagram.com/susant_37">
              <SiInstagram className="icon text-gray-500 text-[20px] mx-2 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
            </a>
            <a href="https://www.facebook.com/Susanta_swain">
              <SiFacebook className="icon text-gray-500 text-[20px] mx-2 hover:scale-150 hover:text-red-600 transition-transform duration-300" />
            </a>
          </div>

          <p className="text-white mt-5 mb-10 text-sm not-selectable">
            Explore my portfolio to witness a diverse array of projects, from
            dynamic web applications to sleek mobile interfaces. Each endeavor
            showcases my dedication to crafting intuitive user experiences and
            robust technical solutions. With a focus on modern technologies like
            MERN stack and Flutter, I strive to push the boundaries of what's
            possible in software development. Whether it's developing full-stack
            applications or designing captivating UI/UX, I bring creativity and
            expertise to every project. Let's connect and discuss how I can
            contribute to your next endeavor.
          </p>
        </div>
      </div>
     
      <div className="flex items-center bg-gray-800 justify-center text-gray-400"><h4>@All Rights Reserved (2024-2025)</h4> </div>
    </div>
  );
};

export default Home;
