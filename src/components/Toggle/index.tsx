"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.css';

const Toggle = () => {
    const toggleTheme = () => {
        const sectionElements = document.querySelectorAll(".dark-theme")
        const textElements = document.querySelectorAll("text-theme-color")
        for (let i = 0; i < sectionElements.length; i++) {
            sectionElements[i].style.backgroundColor = "white"
        }
        for (let i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "black"
        }
    }

    return (
        <div className={`${style.toggle} relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1`} onClick={toggleTheme}>
            <FontAwesomeIcon icon={faMoon} />
        </div>
    );
};

export default Toggle;
