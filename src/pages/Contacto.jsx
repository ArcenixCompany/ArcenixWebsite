import { useEffect } from "react";
import { Contact2 } from "../components/Contact2";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full bg-gradient-to-r from-gris to-blanco dark:bg-gradient-to-r dark:from-morado2 dark:to-darkAzul">
      <Contact2 />
    </div>
  );
};

export { Contacto };
