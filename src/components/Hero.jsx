import React from "react";
import heroimage from "../assets/antwave.JPG";
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/Antonio_Carrizosa_CV.pdf";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="aspect-square object-cover col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px] ">
        <img
          className="rounded-full aspect-square object-cover"
          src={heroimage}
          alt="antwave"
          height={400}
          width={400}
        />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lgtext:9xl font-bold">
          <TypeAnimation
            sequence={[
              "Desarrollador",
              1000,
              "Ingeniero de Datos",
              1000,
              "Business Analyst",
              1000,
            ]}
            speed={30}
            repeat={Infinity}
            className="primary-color font-pixel"
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl lg:whitespace-nowrap">
          Apasionado por la{" "}
          <span className="text-cyan-500 font-bold">tecnología</span>, los{" "}
          <span className="text-cyan-500 font-bold">desafíos</span>, el{" "}
          <span className="text-cyan-500 font-bold">aprendizaje</span> y el{" "}
          <span className="text-cyan-500 font-bold">emprendimiento</span>.
        </p>
        <div className="my-8">
          <a
            href={CV}
            download="Antonio_Carrizosa_CV"
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
