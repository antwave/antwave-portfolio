import React from "react";
import gamesquad from "../assets/gamesquad.png";
import compose from "../assets/compose.png";
import apiImg from "../assets/api.png";
import antonio from "../assets/antonio_carrizosa.png";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Proyectos</p>
        <p className="text-gray-400">Algunos de mis proyectos más recientes</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
        h-[200px] bg-cover relative"
        >
          <img
            src={gamesquad}
            layout="fill"
            objectFit="cover"
            alt="GameSquad"
          />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 inset-0 
          absolute flex flex-col justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider">
              GameSquad
            </span>
            <div className="pt-8 text-center">
              <a href="https://antwave.online/gamesquad">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                  Explórala en directo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="text-white mt-4 md:mt-0 text-left my-auto mx-6 md:col-span-2">
          <h5 className="text-2xl font-bold mb-4 primary-color">
            Gamesquad - Django
          </h5>
          <p className="text-base lg:text-lg">
            Una red social para jugadores hecha en{" "}
            <span className="text-pink-500">Django</span> que sigue las buenas
            prácticas <span className="text-pink-500">API REST</span>. La base
            de datos es SQLite. Tiene implementada registro y autenticación de
            usuario con un modelo personalizado, así como persistencia del
            contenido multimedia subido por el usuario (fotos de perfil). El
            contenido estático lo sirve un servidor NGINX. Tiene una pequeña API
            de muestra en /api/.{" "}
            <a
              className="a-blue"
              href="https://github.com/antwave/GameSquad---Game-Chat-in-Django"
            >
              Código en Github
            </a>
            .
          </p>
        </div>
        <div className="text-white mt-4 md:mt-0 text-left my-auto mx-6 md:col-span-2">
          <h5 className="text-2xl font-bold mb-4 primary-color">
            Servidor antwave.online (NGINX, Docker-Compose)
          </h5>
          <p className="text-base lg:text-lg">
            Configuración de un servidor virtual (VPS) en el cual un servidor
            HTTP (<span className="text-pink-500">NGINX</span>) recibe todas las
            peticiones y las reenvía a los servidores de cada proyecto. Todo
            está containerizado con{" "}
            <span className="text-pink-500">Docker</span> y se despliega
            utilizando las buenas prácticas{" "}
            <span className="text-pink-500">CI/CD</span>. Al pushear código a
            Github se genera automáticamente una imagen Docker que se despliega
            en el servidor. La configuración de NGINX está en{" "}
            <a
              className="a-blue"
              href="https://github.com/antwave/nginx-antwave-online"
            >
              Github
            </a>
            .
          </p>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
        h-[200px] bg-cover relative"
        >
          <img
            src={compose}
            layout="fill"
            objectFit="cover"
            alt="Compose.yml"
          />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 inset-0 
          absolute flex flex-col justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider">
              Docker compose.yml
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                  Explora el archivo de configuración de Docker
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
        h-[200px] bg-cover relative"
        >
          <img src={apiImg} layout="fill" objectFit="cover" alt="Api" />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 inset-0 
          absolute flex flex-col justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider">
              AmazonDemo
            </span>
            <div className="pt-8 text-center">
              <a href="https://github.com/antwave/SpringBootRestPractice_AmazonDemo">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                  Explora el código
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="text-white mt-4 md:mt-0 text-left my-auto mx-6 md:col-span-2">
          <h5 className="text-2xl font-bold mb-4 primary-color">
            AmazonDemo - SpringBoot
          </h5>
          <p className="text-base lg:text-lg">
            Prueba de concepto en{" "}
            <span className="text-pink-500">Java SpringBoot</span> empleando
            buenos patrones y haciendo uso de los conceptos de{" "}
            <span className="text-pink-500">Inversión de Control</span> e{" "}
            <span className="text-pink-500">Inyección de Dependencias</span>.
            Uso del patrón Modelo-Vista-Controlador (
            <span className="text-pink-500">MVC</span>). Gestión de errores y
            excepciones personalizadas así como implementación de tests
            automáticos. El proyecto no está desplegado pero el código está
            disponible en{" "}
            <a
              className="a-blue"
              href="https://github.com/antwave/SpringBootRestPractice_AmazonDemo"
            >
              Github
            </a>
            .
          </p>
        </div>
        <div className="text-white mt-4 md:mt-0 text-left my-auto mx-6 md:col-span-2">
          <h5 className="text-2xl font-bold mb-4 primary-color">
            antwave.online - React/TailwindCSS
          </h5>
          <p className="text-base lg:text-lg">
            Pequeña Single Page Application para mostrar mi portfolio. El
            frontend es React y los estilos utilizan la librería TailwindCSS. El
            servidor es el paquete de npm Serve. El código está disponible en{" "}
            <a
              className="a-blue"
              href="https://github.com/antwave/antwave-portfolio"
            >
              Github
            </a>
            .
          </p>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
        h-[200px] bg-cover relative"
        >
          <img
            src={antonio}
            layout="fill"
            objectFit="cover"
            alt="antwave.online"
          />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[gray]/70 inset-0 
          absolute flex flex-col justify-center items-center"
          >
            <span className="text-2xl font-bold text-white tracking-wider">
              antwave.online
            </span>
            <div className="pt-8 text-center">
              <a href="antwave.online">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                  Estás aquí!
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
