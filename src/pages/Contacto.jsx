import { useEffect } from "react";
import { Contact } from "../components/Contact";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-txt2 dark:bg-bg2 flex flex-col justify-center items-center w-full my-32">
      <Contact />
    </div>
  );
};

export { Contacto };
