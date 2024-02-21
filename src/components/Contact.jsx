const Contact = () => {
  return (
    <>
      <div className="w-[600px]">
        <div className="flex-col flex bg-background1 p-10">
          <h2 className="text-text2 w-full text-center p-2 font-bold">
            CONTACTANOS
          </h2>
          <p className="text-text1 w-full text-justify p-1">
            - Si te gustaría tener contacto con el área comercial de Arcenix
            Company en representación de marcas, organizaciones o intereses
            particulares
          </p>
          <p className="text-text1 w-full text-justify p-1">
            - Si te gustaría cubrir el mundo de Arcenix Company en medios
            audiovisuales periodísticos con exclusivas oficiales
          </p>
          <p className="text-text1 w-full text-justify p-1">
            - Si te interesa ser parte del equipo de trabajo de Arcenix Company
          </p>
        </div>
        <div className="flex flex-col bg-background1 p-10">
          <form action="#" className="flex flex-col">
            <input
              type="text"
              placeholder="Nombre"
              className="p-3 bg-background2 border-b-2 border-text1 my-2 text-text2 rounded-sm"
            />
            <input
              type="date"
              name=""
              id=""
              className="p-3 bg-background2 border-b-2 border-text1 my-2 text-text2 rounded-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 bg-background2 border-b-2 border-text1 my-2 text-text2 rounded-sm"
            />
            <input
              type="text"
              placeholder="Mensaje"
              className="p-3 bg-background2 border-b-2 border-text1 my-2 text-text2 rounded-sm"
            />
            <div className="space-x-2 flex w-full">
              <input type="checkbox" />
              <p className="text-text1">Acepto los</p>
              <a href="#" className="text-rosita">
                terminos de tratamientos de datos.
              </a>
            </div>
          </form>
        </div>
        <div className="bg-background1 p-10 w-full flex flex-col justify-center items-center">
          <p className="text-text1 p-2 text-xl w-[400px] text-center">
            Podes contactarnos tambien por email
          </p>
          <a href="#">
            <i className="bi bi-envelope-fill text-text1 text-xl p-2 hover:text-rosita transition-all"></i>
          </a>
        </div>
        <div className="bg-background1 p-10 flex flex-col justify-center items-center">
          <p className="text-text1 text-xl w-[400px] text-center">
            Tambien podes encontrarnos en nuestras redes
          </p>
          <ul className="flex w-full justify-around p-10">
            <li>
              <a href="#">
                <i className="bi bi-twitch text-xl hover:text-rosita transition-all text-text1"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-discord text-xl hover:text-rosita transition-all text-text1"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-youtube text-xl hover:text-rosita transition-all text-text1"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-tiktok text-xl hover:text-rosita transition-all text-text1"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-twitter-x text-xl hover:text-rosita transition-all text-text1"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-instagram text-xl hover:text-rosita transition-all text-text1"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { Contact };
