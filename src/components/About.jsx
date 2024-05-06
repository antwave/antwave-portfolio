import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">Sobre mí</h2>
            <p className="text-base lg:text-lg">
              Me mueve aprender cosas nuevas. Por eso mi trayectoria profesional
              es horizontal, y abarca desde roles{" "}
              <span className="text-pink-500">tecnológicos</span> (Accenture,
              Lana.xyz) hasta una posición en{" "}
              <span className="text-pink-500">Marketing y ventas</span>{" "}
              (Nintendo), así como experiencia en{" "}
              <span className="text-pink-500">
                finanzas, contabilidad y negocio
              </span>{" "}
              en mi última etapa como autónomo. Mi objetivo actual es regresar a
              la <span className="text-pink-500">tecnología</span> para
              desarrollar mis conocimientos y{" "}
              <span className="text-pink-500">construir</span> proyectos con
              impacto.
              <br></br>
              <br></br>
              Me apasionan los datos y creo al 100% que soy capaz de aprender
              cualquier cosa
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl my-8 md:my-0"
          src={aboutImg}
          width={300}
          height={300}
          alt="antwave"
        />
      </div>
    </div>
  );
};

export default About;
