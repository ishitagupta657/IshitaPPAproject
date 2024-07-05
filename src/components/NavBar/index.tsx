"use client";

import style from './style.module.css';
import Link from 'next/link'

import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface Props {
    theme: string,
    SetTheme: (value: string | null) => void
}

export const NavBar = (props: Props) => {

    const { theme, SetTheme } = props

    useEffect(() => {
        SetTheme((localStorage).getItem('site-theme'))
    }, [])

    useEffect(() => {
        applyTheme()
    }, [theme])

    const applyTheme = () => {
        if (theme === "white") {
            applyWhiteTheme()
        } else {
            applyDarkTheme()
        }
    }

    const toggleTheme = () => {
        SetTheme(theme === 'dark' ? 'white' : 'dark')
    }

    const applyWhiteTheme = () => {
        localStorage.setItem('site-theme', "white")
        const sectionElements = document.querySelectorAll(".theme-background")
        const textElements = document.querySelectorAll(".text-theme-color")
        for (let i = 0; i < sectionElements.length; i++) {
            sectionElements[i].style.backgroundColor = "white"
        }
        for (let i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "black"
        }
    }
    const applyDarkTheme = () => {
        localStorage.setItem('site-theme', "dark")
        const sectionElements = document.querySelectorAll(".theme-background")
        const textElements = document.querySelectorAll(".text-theme-color")
        for (let i = 0; i < sectionElements.length; i++) {
            sectionElements[i].style.backgroundColor = "black"
        }
        for (let i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "white"
        }
    }
    return (
        <div className={`${style.header} theme-background`}>
            <div className={style['left-nav-containts']}>
                <div>
                    <Link href="/">
                        <img className={style.brandicon} style={{ filter: theme != 'dark' ? 'invert(1)' : 'unset' }} src="/assets/img/brandicon.png" width={0} height={0} alt="Brand Logo" />
                    </Link>
                </div>
                <div className={`${style['other-header-containts']} text-theme-color`}>Docs</div>
                <div className={`${style['other-header-containts']} text-theme-color`}>Pricing</div>
                <div className={`${style['other-header-containts']} text-theme-color`}>Status</div>
                <div className={`${style['other-header-containts']} text-theme-color`}>FAQs</div>
                <div className={`${style['other-header-containts']} text-theme-color`}>Contact Us</div>
            </div>
            <div className={style['right-nav-containts']}>

                <div className={style.toggle} style={{ filter: theme === 'dark' ? 'invert(1)' : 'unset' }} onClick={toggleTheme}>
                    <FontAwesomeIcon width={20} height={20} icon={faMoon} />
                </div>
                <div className={`${style['login-btn']}`}>
                    <button className={`${style['login']}`}>
                        <Link className={'cta-btn text-theme-color'} href="/login">Login</Link>
                    </button>
                </div>
                <div>
                    <button>
                        <Link className={'cta-btn'} href="/signup">Sign Up</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

