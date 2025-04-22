import React from "react";
import { useSelector } from "react-redux";

function Skills() {
  const theme = useSelector((state) => state.themeChanger.value);
  console.log(theme);

  return (
    <div
      className={`lg:flex justify-between gap-10 items-center mt-10 mb-10 rounded-xl ${
        theme ? "bg-[#1A1A1A]" : "bg-gray-100 "
      } rounded-xl p-10 pt-3`}
    >
      <div className="hidden lg:block">
        <img src="/assets/skills-1_img.png" className="mb-14 h-[500px]" />
        <img src="/assets/skills_img2.png" className="h-[500px]" />
      </div>
      <div className="w-full sm:m-20 md:m-0 lg:w-[40%]">
        {/* Front-End Section */}
        <div>
          <p
            className={`font-montserrat font-bold text-2xl m-4 ml-0 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Front-End
          </p>
          <div className="flex gap-5 lg:w-3/4 flex-wrap">
            <div>
              <img
                src="/assets/React-icon.svg.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                React
              </p>
            </div>
            <div>
              <img
                src="/assets/js.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                JavaScript
              </p>
            </div>
            <div>
              <img
                src="/assets/redux.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Redux
              </p>
            </div>
            <div>
              <img
                src="/assets/html.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                HTML5
              </p>
            </div>
            <div>
              <img
                src="/assets/css.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                CSS3
              </p>
            </div>
            <div>
              <img
                src="/assets/Tailwind CSS.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Tailwind
              </p>
            </div>
            <div>
              <img
                src="/assets/bootstrap.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Bootstrap
              </p>
            </div>
          </div>
        </div>

        {/* Back-End Section
        <div>
          <p
            className={`font-montserrat font-bold text-2xl m-4 ml-0 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Back-End
          </p>
          <div className="flex gap-5 w-3/4 flex-wrap">
            <div>
              <img
                src="/assets/node.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Node
              </p>
            </div>
            <div>
              <img
                src="/assets/express.webp"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Express
              </p>
            </div>
            <div>
              <img
                src="/assets/appwrite.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Appwrite
              </p>
            </div>
          </div>
        </div> */}

        {/* Databases Section */}
        <div>
          <p
            className={`font-montserrat font-bold text-2xl m-4 ml-0 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Databases
          </p>
          <div className="flex gap-5 w-3/4 flex-wrap">
            <div>
              <img
                src="/assets/mongodb.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                MongoDB
              </p>
            </div>
            <div>
              <img
                src="/assets/postgresql.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                PostgreSQL
              </p>
            </div>
          </div>
        </div>

        {/* Version Control & Deployment Section */}
        <div>
          <p
            className={`font-montserrat font-bold text-2xl m-4 ml-0 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Version Control & Deployment
          </p>
          <div className="flex gap-5 w-3/4 flex-wrap">
            <div>
              <img
                src="/assets/git.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Git
              </p>
            </div>
            <div>
              <img
                src="/assets/github.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                GitHub
              </p>
            </div>
            <div>
              <img
                src="/assets/vercel.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Vercel
              </p>
            </div>
            {/* <div>
              <img
                src="/assets/render.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Render
              </p>
            </div> */}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <p
            className={`font-montserrat font-bold text-2xl m-4 ml-0 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Tools
          </p>
          <div className="flex gap-5 w-3/4 flex-wrap">
            <div>
              <img
                src="/assets/vs.webp"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                VS Code
              </p>
            </div>
            <div>
              <img
                src="/assets/npm.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                npm
              </p>
            </div>
            {/* <div>
              <img
                src="/assets/postman.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Postman
              </p>
            </div> */}
          </div>
        </div>

        {/* Design Section */}
        <div>
          <p
            className={`font-montserrat font-bold text-2xl m-4 ml-0 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Design
          </p>
          <div className="flex gap-5 w-3/4 flex-wrap">
            <div>
              <img
                src="/assets/figma.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Figma
              </p>
            </div>
            <div>
              <img
                src="/assets/canva.png"
                alt=""
                className="h-10 sm:h-12 md:h-16"
              />
              <p
                className={`text-center font-roboto font-light sm:text-sm md:text-lg ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Canva
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
