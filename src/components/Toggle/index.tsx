"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import style from './style.module.css';

const Toggle = () => {
    // const [darkMode, setDarkMode] = useState(true);

    // useEffect(() => {
    //     const theme = localStorage.getItem("theme");
    //     if (theme === "dark") setDarkMode(true);
    //     else setDarkMode(false);
    // }, []);

    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add('dark');
    //         localStorage.setItem("theme", "dark");
    //     } else {
    //         document.documentElement.classList.remove("dark");
    //         localStorage.setItem("theme", "light");
    //     }
    // }, [darkMode]);

    const toggleTheme = () => {
        const sectionElements = document.getElementsByClassName("dark-theme")
        const textElements = document.getElementsByClassName("text-theme-color")
        for(let i = 0; i < sectionElements.length; i++){
            sectionElements[i].style.backgroundColor = "white"
        }
        for(let i = 0; i < textElements.length; i++){
            textElements[i].style.color = "black"
        }
    }

    return (
        <div className={`${style.toggle} relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1`} onClick={toggleTheme}>

Toggle
        </div>
    );
};

export default Toggle;
