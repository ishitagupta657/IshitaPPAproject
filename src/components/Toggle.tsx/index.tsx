"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn }from '@fortawesome/free-solid-svg-icons'
import { use, useEffect, useState } from "react";
import style from './style.module.css';
<FontAwesomeIcon icon={faToggleOn} />
const Toggle=()=>{
    const [darkMode, setDarkMode ]=useState(true)
    useEffect(()=>{
        const theme=localStorage.getItem("theme")
        if(theme === "dark") setDarkMode(true)
    }, [])

    useEffect(()=>{
       if(darkMode){
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark")
       }else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
       }
    }, [darkMode]);








    return(
        <div className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1"
    )
};
export default Toggle;