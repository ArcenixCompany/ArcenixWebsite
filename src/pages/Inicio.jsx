// import back1 from "../views/img/backText.jpg";
import { Contact } from "../components/Contact";
import logo from "../views/img/logoHD2.png";
const Inicio = () => {
  return (
    <div className="bg-background2 flex flex-col ">
      <div className="h-screen w-full flex justify-center items-center">
        <div
          className="w-full h-full bg-cover bg-center flex justify-center items-center space-x-6"
        >
          {/* style={{ backgroundImage: `url(${back1})` }} */}
          <img
            src={logo}
            alt="logo"
            className="w-[200px] h-[200px] rounded-full"
          />
          <div>
          <p className="text-rosita text-[50px] font-bold">
            Arcenix
          </p>
          <p className="text-naranja text-[50px] font-bold">
            Company
          </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className="h-fit w-full text-3xl text-rosita py-10 px-4 font-bold">
            Noticias Destacadas
          </h2>
        </div>
      </div>
    </div>
  );
};

export { Inicio };