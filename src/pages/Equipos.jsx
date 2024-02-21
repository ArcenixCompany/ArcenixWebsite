import maxfoto from "../views/img/max.png";
const Equipos = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-txt1 dark:bg-bg2">
        <section className="w-fit p-2 bg-d2">
          {/* card */}
          <div className="w-72 h-fit group flex flex-col justify-center items-center bg-d1">
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
            <h2 className="mt-3 text-xl text-bg2 dark:text-txt2">Maimus</h2>
            <p className="text-lg text-bg2 dark:text-txt2">Maximiliano Solis</p>
            <p className="text-xl mt-2 text-bg1 font-bold p-2">Owner</p>
          </div>
        </section>
      </div>
    </>
  );
};

export { Equipos };
