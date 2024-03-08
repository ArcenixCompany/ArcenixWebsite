import { IoIosArrowUp } from "react-icons/io";
const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hace que el scroll sea suave
    });
  };

  return (
    <>
      <button
        className="w-8 h-8 bg-gris2 bottom-5 fixed right-5 rounded-full cursor-pointer shadow-xl"
        onClick={handleScrollToTop}
      >
        <IoIosArrowUp className="w-8 h-8 text-blanco" />
      </button>
    </>
  );
};
export { ScrollToTopButton };
