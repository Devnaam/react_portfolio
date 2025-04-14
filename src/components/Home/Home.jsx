import React from "react";
// import { useEffect, useState } from "react";
import "../../App.css";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.themeChanger.value);
  console.log(theme);

  // var loop = ["full stack  ","MERN  ","developer  ","ui/ux  ","React  ","javascript  "]
  // const [currentWord, setCurrentWord] = useState('');
  // const [charIndex, setCharIndex] = useState(0);
  // const [wordIndex, setWordIndex] = useState(0);

  // useEffect(() => {
  //   const handle = setInterval(() => {
  //     setCharIndex((prevCharIndex) => {
  //       if (prevCharIndex < loop[wordIndex].length) {
  //         setCurrentWord(loop[wordIndex].substring(0, prevCharIndex + 1));
  //         return prevCharIndex + 1;
  //       } else {
  //         setWordIndex((prevWordIndex) => (prevWordIndex + 1) % loop.length);
  //         return 0;
  //       }
  //     });
  //   }, 200); // Adjust the speed by changing the interval duration

  //   return () => clearInterval(handle);
  // }, [wordIndex, loop]);

  return (
    <div
      className={`mt-10 mx-auto w-full max-w-7xl md:flex justify-around mb-10 md:h-screen items-center ${
        theme ? "bg-[#1A1A1A]" : "bg-gray-100 "
      } rounded-xl p-8`}
    >
      <div className="md:w-2/4">
        <h2
          className={`text-4xl font-bold sm:text-5xl m-3 mt-10 ${
            theme ? "text-white" : "text-black"
          }`}
        >
          {/* {currentWord}_ */}
          Hello!👋
          <span className="sm:hidden">
            <br />
          </span>
          <span
            className={` sm:block text-xl mt-5 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            I am Devnaam
          </span>
          <span className="sm:hidden">
            <br />
          </span>
          <span
            className={`sm:block text-xl mt-5 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Full Stack Developer
          </span>
        </h2>
        <p className={`mt-10 ${theme ? "text-white" : "text-black"}`}>
        Computer Science student passionate about IoT, Cyber Security, and Blockchain Development. I thrive in Full-Stack Web Development, turning complex ideas into clean, scalable solutions. With a focus on clarity and performance, I deliver efficient, high-quality code that bridges innovation with real-world impact. Always learning. Always building.
        </p>
        <button
          className={`text-center md:text-[30px] font-bold m-10 ${
            theme
              ? "bg-white hover:bg-green-900 hover:text-white transition duration-300 ease-in-out"
              : " hover:bg-green-900 hover:text-white transition duration-300 ease-in-out bg-black text-white"
          } rounded-2xl px-8 p-2`}
          onClick={() => window.open("./assets/Resume.pdf")}
        >
          Click me!
        </button>
      </div>
      <div>
        <center>
          <img
            src="/assets/me.jpg"
            className=" mt-4 h-[200px] w-[200px] rounded-full object-cover md:w-[400px] md:h-[400px] md:hover:h-[450px] md:hover:w-[450px] transition-all duration-300 ease-in-out animate-scale shadow-2xl"
          />
        </center>
      </div>
    </div>
  );
}
