import maxfoto from "../views/img/max.png";
const Equipos = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <section className="w-fit p-2 bg-background1">
          {/* card */}
          <div className="w-72 h-fit group flex flex-col justify-center items-center">
            <div className="relative overflow-hidden">
              <img src={maxfoto} alt="maxfoto" />
              <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className=" w-full flex justify-center space-x-5">
                  <div className="bg-black rounded-full w-9 h-9 flex items-center justify-center">
                    <a href="https://www.instagram.com/maimuus?igsh=c2cwMXB1cnBsMHVm" target="_blank">
                      <i className="bi bi-instagram text-white"></i>
                    </a>
                  </div>

                  <div className="bg-black rounded-full w-9 h-9 flex items-center justify-center">
                    <a href="#">
                      <i className="bi bi-twitter-x text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="mt-3 text-xl text-text1">Maimus</h2>
            <p className="text-lg text-text1">Maximiliano Solis</p>
            <p className="text-xl mt-2 text-text2 p-2">Owner</p>
          </div>
        </section>
      </div>
      <p className="text-rosa"></p>
      <p className="text-violeta"></p>
      <p className="text-naranja"></p>
      <p className="text-azulado"></p>
      <p className="text-rosita"></p>
      <p className="text-background1"></p>
      <p className="text-background2"></p>
      <p className="text-text1"></p>
      <p className="text-text2"></p>
    </>
  );
};

export { Equipos };
