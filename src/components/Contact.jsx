import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">
          Contacto
        </h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="pt-5 px-10 pb-2 text-gray-400 text-center">
            <p>
              Estoy siempre disponible en&nbsp;
              <a
                className="primary-color"
                href="mailto:antonio.carrizosa@outlook.com"
              >
                antonio.carrizosa@outlook.com
              </a>
            </p>
            <p>
              &nbsp;Si lo prefieres, también puedes contactarme a través de este
              formulario :)
            </p>
          </div>
          <div className="px-10 pb-10">
            <form action="https://getform.io/f/ebpdlkqb" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Nombre"
                      className="bg-[#161616]
                    w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md
                    focus:outline-none focus:border-pink-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Email"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md
                    focus:outline-none focus:border-pink-500"
                    ></input>
                    {/*<!-- add hidden Honeypot input to prevent spams -->*/}
                    <input
                      type="hidden"
                      name="_gotcha"
                      style={{ display: "none !important" }}
                    ></input>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Tu mensaje"
                      className="bg-[#161616]
                    w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md
                    focus:outline-none focus:border-pink-500"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
