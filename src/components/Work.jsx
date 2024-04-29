import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Algunos de mis proyectos más recientes</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
        h-[200px] bg-cover relative"
        >
          <img src={proj1} layout="fill" objectFit="cover" alt="GameSquad" />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 inset-0 
          absolute flex flex-col justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider">
              GameSquad
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                  Explórala en directo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
