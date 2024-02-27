import React, { useEffect } from 'react';

const ArcenixGames = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className='min-h-screen flex justify-center items-center'>
            <h1 className='text-3xl'>Bienvenid@ a Arcenix Games</h1>
        </div>
    )
}

export { ArcenixGames }