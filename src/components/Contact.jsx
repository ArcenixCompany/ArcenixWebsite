import React from "react";
import logo from "../views/svg/alas_fenix.svg";

const Contact = () => {
  return (
    <div className="flex justify-center items-center w-[90%] py-7 max-w-[1300px] min-h-screen">
      <div className="border-2 border-blanco shadow-md shadow-blanco flex flex-col lg:flex-row min-h-[700px] rounded-lg">
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className=" h-[70%] flex flex-col py-10">
            <div className="lg:h-[25%] flex flex-col justify-center items-center">
              <div className="w-full flex flex-col items-center">
                <h1 className="text-blanco font-bold text-center p-2 w-full text-xl">
                  ¡CONTACTATE CON NOSOTROS!
                </h1>
                <p className="text-blanco text-center p-5 text-xs w-[80%] lg:w-[60%] lg:mb-14">
                  Estamos aquí para ayudarte. Escribenos o llámanos para
                  resolver cualquier duda o inquietud que tengas sobre nuestros
                  servicios
                </p>
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <form
                action="#"
                className="flex flex-col gap-5 justify-center items-center w-[70%]"
              >
                <input
                  type="text"
                  placeholder="Nombre"
                  className="font-thin text-blanco p-1 px-4 w-full bg-morado2 border border-blanco rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="font-thin text-blanco p-1 px-4 w-full bg-morado2 border border-blanco rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Mensaje"
                  className="font-thin text-blanco p-1 px-4 w-full pb-32 bg-morado2 border border-blanco rounded-lg"
                />
                <div className="w-100 lg:w-full">
                  <button className="bg-blanco text-morado px-16 py-2 font-bold text-xl rounded-lg">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 bg-blanco rounded-tl-[100px] lg:rounded-tl-[200px] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-morado2 font-bold text-2xl w-[100%] text-center mt-10 lg:w-[70%] lg:mt-0 lg:text-start">
              HABLEMOS
            </h2>
            <div className="w-full flex space-x-3 justify-center items-center p-4">
              <i className="bi bi-envelope-fill text-xl text-morado2"></i>
              <p className="text-morado2 text-xl text-start w-full">
                arcenixcompany@gmail.com
              </p>
            </div>
            <div className="w-full flex space-x-3 justify-center items-center p-4">
              <i className="bi bi-telephone-fill text-xl text-morado2"></i>
              <p className="text-morado2 text-xl text-start w-full">
                1154366545
              </p>
            </div>
            <div className="w-full flex space-x-3 justify-center items-center p-4">
              <i className="bi bi-clock-fill text-xl text-morado2"></i>

              <p className="text-morado2 text-xl text-start w-full">
                Lunes a Viernes: 9 a 20hs
              </p>
            </div>
            <div className="w-full p-4">
              <div className="flex w-full justify-between items-start space-x-4">
                <a
                  href="#"
                  className="bg-morado2 p-1 rounded-full w-8 h-8 flex justify-center items-center"
                >
                  <i className="bi bi-instagram text-xl text-blanco"></i>
                </a>

                <a
                  href="https://www.linkedin.com/company/arcenix-company/"
                  className="bg-morado2 p-1 rounded-full w-8 h-8 flex justify-center items-center"
                >
                  <i className="bi bi-linkedin text-xm text-blanco"></i>
                </a>

                <a
                  href="#"
                  className="bg-morado2 p-1 rounded-full w-8 h-8 flex justify-center items-center"
                >
                  <i className="bi bi-tiktok text-xl text-blanco"></i>
                </a>
                <div className="flex justify-end items-end">
                  <img src={logo} alt="" className="w-40 h-40 text-morado2 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact };
