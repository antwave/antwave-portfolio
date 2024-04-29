import React from "react";
import heroimage from "../assets/profilepic7.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="antwave" />{" "}
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lgtext:8xl font-extrabold">
          <span className="primary-color">Soy</span> <br />
          <TypeAnimation
            sequence={[
              "Desarrollador",
              1000,
              "Ingeniero de Datos",
              1000,
              "Business Analyst",
              1000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          Mi nombre es Antonio Carrizosa y me gusta mucho aprender cosas
        </p>
        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-blue-500 to-pink-800 text-white"
          >
            Descargar CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-blue-500 to-pink-500 text-white hover:border-none"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
