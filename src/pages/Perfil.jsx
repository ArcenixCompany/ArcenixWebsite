const Perfil = () => {
  return (
    <div className="bg-background2 h-screen w-full flex justify-center items-center">
      <h1>Perfil</h1>
      <button className=" text-red-700 pl-6 p-2 hover:font-bold transition-all">
        <div className="flex gap-2">
          <i className="bi bi-box-arrow-in-left"></i>
          <p>Cerrar sesión</p>
        </div>
      </button>
    </div>
  );
};

export { Perfil };
