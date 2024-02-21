import { useEffect, useState } from 'react';

const ToggleSwitch = () => {

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.className === 'dark');
  
    const changeDarkMode = () => {
      const newIsDarkMode = !isDarkMode;
      setIsDarkMode(newIsDarkMode);
  
      document.documentElement.classList.toggle('dark', newIsDarkMode);
  
      localStorage.theme = newIsDarkMode ? 'dark' : 'light';
    };
  
    useEffect(() => {
      document.documentElement.classList.toggle('dark', isDarkMode);
      localStorage.theme = isDarkMode ? 'dark' : 'light';
    }, [isDarkMode]);

    return(

      <div className='w-full bg-txt2 text-txt1 dark:bg-bg1 dark:text-txt2 transition-all flex md:justify-center sm:justify-center'>
        <div className=" flex">
          
          <div className='flex-grow'></div>

          <button 
            className="font-bold  rounded flex  items-center w-fit" 
            onClick={changeDarkMode}
          >       
                <label htmlFor="check" className='bg-txt1 dark:bg-celesteClaro relative w-10 h-5 rounded-full'>
                <input 
                className='hidden cursor-pointer'
                type="checkbox"
                onChange={changeDarkMode}
                checked={isDarkMode}
                />
                <span className='w-3 h-3 bg-bg1 absolute rounded-full left-1 top-1 dark:bg-negro dark:left-6 transition-all duration-500'></span>
                </label>
              {isDarkMode ? '' : ''}
          </button>

        </div>
      </div>
    )
}

export { ToggleSwitch }