import back from "../views/img/Grand Theft Auto V.jpg";
const Login = () => {
  return (
    <div className="bg-background2 h-screen">
      <div className="w-full flex">
        <div className="w-1/2 flex items-center justify-start bg-background2">
          <img src={back} alt="background" className="w-fit h-screen" />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-fit p-5 text-2xl">
            <h2 className="text-text2 text-4xl font-bold py-2">¡Hola!</h2>
            <h2 className="text-text2 py-2">Bienvenid@ al PCU de Arcenix</h2>
            <p className="text-text2 py-2">
              ¿Nuevo por aquí?{" "}
              <a
                href="#"
                className="font-bold text-naranja hover:text-violeta hover:font-bold transition-all"
              >
                Únete a nuestro discord
              </a>
            </p>
            <div className="flex justify-start w-full py-3">
              <a
                href="https://store.steampowered.com/login/?redir=%3Fl%3Dspanish&redir_ssl=1&snr=1_4_4__global-header"
                target="_blank"
                className="bg-naranja text-text2 hover:text-text1 hover:font-bold transition-all p-3 rounded-md"
              >
                <i className="bi bi-steam mx-2"></i> Iniciar sesión
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
