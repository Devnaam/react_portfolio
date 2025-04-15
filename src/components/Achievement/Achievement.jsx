import React from "react";
import MultiActionAreaCard from "../Card";
import leetCode from "/assets/leetCode.jpeg"
import sih from "/assets/sih.jpg"
import coding_club from "/assets/acm.png"
import nasa_space_app from "/assets/NASA_spaceApp.jpg"
import { useSelector } from "react-redux";

function Achievement() {
  const theme = useSelector((state) => state.themeChanger.value);

  return (
    <div
      className={`flex justify-between flex-wrap m-4 gap-4 mt-10 mb-10 ${
        theme ? "bg-[#1A1A1A]" : "bg-gray-100 "
      } rounded-xl md:p-10 `}
    >
      <div>
      <a
          href="https://www.linkedin.com/in/raj-priyadershi-56a256282/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <MultiActionAreaCard
          img={nasa_space_app}
          name={"🏆NASA Space Apps Challenge – Locard Award Winner."}
          dis={
            "Awarded for outstanding innovation and problem-solving at the world’s largest global hackathon hosted by NASA. Recognized for creating a solution aligned with space technology, cybersecurity, or digital integrity themes (Locard award focus), demonstrating excellence in creativity, collaboration, and technical implementation."
          }
        />
        </a>
      </div>
      <div>
      <a
          href="https://www.linkedin.com/posts/raj-priyadershi-56a256282_sih2023-finalist-techinnovation-activity-7151097673238896641-mpHi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAES8eKIB56CEzDTkLN7Y1Ae7xnyh4ugwZbY"
          target="_blank"
          rel="noopener noreferrer"
        >
        <MultiActionAreaCard
          img={sih}
          name={"Smart India Hackathon 2023"}
          dis={
            "! Worked with my team on real-world problems, showcased innovative tech solutions, gained national-level exposure, and earned a certificate—truly a proud and enriching experience!"
          }
        />
        </a>
      </div>
      <div>
      <a
          href="https://www.linkedin.com/in/raj-priyadershi-56a256282/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <MultiActionAreaCard
          img={coding_club}
          name={"Secretary” at ACM (Associati on for Computing Machinery), SVCET(A)"}
          dis={
            "Coordinated events and workshops, managed communicati ons, and led a team of students to promote computer science and engineering acti viti es within the college."
          }
        />
        </a>
      </div>
    </div>
  );
}

export default Achievement;
