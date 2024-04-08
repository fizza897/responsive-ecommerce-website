import React, { useEffect, useState } from 'react';
import LightButton from "../../components/Images/light-mode-button.png";
import DarkButton from "../../components/Images/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // Using || for default value
    const element = document.documentElement; // Access to html

    // Set theme to localStorage and html element
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]); // Adding theme as dependency to useEffect

    return (
      <>
        <div className='relative'>
            <img 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                src={LightButton} 
                className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-opacity duration-300`} 
                alt="Light Mode Button" 
                />
            <img 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                src={DarkButton} 
                className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"} transition-opacity duration-300`} 
                alt="Dark Mode Button" 
                />
        </div>
                </>
    );
};

export default DarkMode;
