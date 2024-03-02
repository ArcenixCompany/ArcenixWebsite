import { useState } from "react";
import PropTypes from 'prop-types';

const Carousel = ({ slides }) => {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };
  
    return (
    <>
        <div className="relative h-80 overflow-hidden">
            <div 
                className={`flex transition ease-out duration-40`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                    {slides.map((s, index) => { // Usar 'index' para 'key'
                        return (
                            <img key={index} src={s} alt={`Slide ${index}`}/>
                        );
                    })}
                
            </div>
        </div>

        <div className="absolute z-4 top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
            <button onClick={previousSlide}>
                <i className="bi bi-caret-left"></i>
            </button>
            <button onClick={nextSlide}>
                <i className="bi bi-caret-right"></i>
            </button>
        </div>
    </>
  );
};

Carousel.propTypes = {
    slides: PropTypes.array.isRequired // Validacion de props
};

export { Carousel };