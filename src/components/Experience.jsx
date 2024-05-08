import React from "react";

const Experience = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto" id="experience">
      <div className="mt-4 md:mt-0 text-left ">
        <div className="my-auto md:mx-6">
          <h2 className="text-4xl font-bold mx-6 md:mx-0 mb-4 primary-color">
            Experiencia Laboral
          </h2>
          <div className="mx-10">
            <h5 className="text-2xl font-bold text-cyan-500">
              Experiencia en roles tecnológicos
            </h5>
            <div className="mx-5">
              <h6 className="text-lg">
                <span className="text-xl font-bold text-pink-500">
                  Lana.xyz
                </span>{" "}
                - <br className="md:hidden" />
                <span className="text-yellow-400">Ingeniero de Datos</span>
              </h6>

              <small>Diciembre 2021 - Agosto 2022</small>
              <p className="">
                Startup de microcréditos con operativa en varios países de
                LATAM. Encargado de los datos de la compañía: desde diseñar{" "}
                <span className="text-pink-500">ETLs</span> para migrar
                periódicamente datos de{" "}
                <span className="text-pink-500">BigQuery</span> a{" "}
                <span className="text-pink-500">PostgreSQL</span> a través de{" "}
                <span className="text-pink-500">Apache Airflow</span>, hasta
                realizar queries complejas para analizar el riesgo crediticio de
                los usuarios o realizar análisis periódico del negocio.
                Procesamiento de los datos tanto en SQL nativo como a través de{" "}
                <span className="text-pink-500">Pandas</span> y{" "}
                <span className="text-pink-500">Apache Spark</span> en Python.
              </p>
            </div>
            <div className="mx-5">
              <h6 className="text-lg">
                <span className="text-xl font-bold text-pink-500">
                  Accenture
                </span>{" "}
                - <br className="md:hidden" />
                <span className="text-yellow-400">
                  Intern Consulting Analyst
                </span>
              </h6>

              <small>Octubre 2019 - Julio 2020</small>
              <p>
                Análisis Funcional de Integraciones entre sistemas con
                responsabilidad completa en un proyecto de Transformación
                Digital para una compañía energética. Encargado de comprender
                las necesidades y los requisitos del cliente para después
                elaborar documentación técnica. Reuniones periódicas tanto con
                el cliente como con el equipo de desarrollo. Recomendación
                escrita del manager del proyecto.
              </p>
            </div>
          </div>
          <div className="mx-10">
            <h5 className="text-2xl font-bold text-cyan-500">
              Experiencia en roles no tecnológicos
            </h5>
            <div className="mx-5">
              <h6 className="text-lg">
                <span className="text-xl font-bold text-pink-500">
                  Nintendo
                </span>{" "}
                - <br className="md:hidden" />
                <span className="text-yellow-400">PR Executive</span>
              </h6>

              <small>Junio 2021 - Octubre 2021</small>
              <p className="">
                Agente de Relaciones Públicas de Nintendo Ibérica. Encargado de
                diseñar y ejecutar campañas y acciones publicitarias así cómo de
                ejecutar acciones y realizar demostraciones de producto con
                medios de prensa e influencers.
              </p>
            </div>
            <div className="mx-5">
              <h6 className="text-lg">
                <span className="text-xl font-bold text-pink-500">
                  Trabajador Autónomo
                </span>{" "}
                - <br className="md:hidden" />
                <span className="text-yellow-400">
                  Análisis Financiero y Gestión de Negocio
                </span>
              </h6>

              <small>Agosto 2022 - Actualidad</small>
              <p className="mx-5">
                {">"} Investigación y análisis de negocio y financiero.
                Elaboración y comercialización de tesis de inversión elaboradas
                a partir de los informes trimestrales y anuales de compañías
                cotizadas siguiendo la disciplina de inversión en valor.
                Análisis macroeconómico.
                <br />
                {">"} Gestión de negocio familiar de hostelería
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
