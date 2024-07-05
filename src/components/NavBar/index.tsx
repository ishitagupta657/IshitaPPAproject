
import style from './style.module.css';
import Link from 'next/link'
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface Props {
    theme: string,
    SetTheme: (value: string | null) => void
}

export const NavBar = (props: Props) => {

    const { theme, SetTheme } = props
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        SetTheme((localStorage).getItem('site-theme'))
    }, [])

    useEffect(() => {
        applyTheme()
    }, [theme, isMobileMenuOpen])

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
        const sectionElements = document.querySelectorAll(".theme-background") as any
        const textElements = document.querySelectorAll(".text-theme-color") as any
        for (let i = 0; i < sectionElements.length; i++) {
            sectionElements[i].style.backgroundColor = "white"
        }
        for (let i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "black"
        }
    }
    const applyDarkTheme = () => {
        localStorage.setItem('site-theme', "dark")
        const sectionElements = document.querySelectorAll(".theme-background") as any
        const textElements = document.querySelectorAll(".text-theme-color") as any
        for (let i = 0; i < sectionElements.length; i++) {
            sectionElements[i].style.backgroundColor = "black"
        }
        for (let i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "white"
        }
    }


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className={`${style.header} shadow-md theme-background`}>
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                <div className="flex items-center space-x-4">
                    <Link href="/" className='mr-8'>

                        <picture>
                            <source media="(max-width: 799px)" srcSet="/assets/img/brandicon-ppa-mobile.png" />
                            <img
                                style={{ filter: theme != 'dark' ? 'invert(1)' : 'unset' }}
                                className={`h-8 w-auto ${style.brandicon}`}
                                src="/assets/img/brandicon.png" alt="Chris standing up holding his daughter Elva" />
                        </picture>

                    </Link>
                    <div className="hidden md:flex space-x-8 text-theme-color">
                        <Link href="/" className={`${style['other-header-containts']} text-theme-color`}>Docs</Link>
                        <Link href="/" className={`${style['other-header-containts']} text-theme-color`}>Pricing</Link>
                        <Link href="/" className={`${style['other-header-containts']} text-theme-color`}>Status</Link>
                        <Link href="/" className={`${style['other-header-containts']} text-theme-color`}>FAQs</Link>
                        <Link href="/" className={`${style['other-header-containts']} text-theme-color`}>Contact Us</Link>
                    </div>
                </div>
                <div className="flex items-center space-x-8">
                    <div
                        className="cursor-pointer hidden md:block "
                        style={{ filter: theme === 'dark' ? 'invert(1)' : 'unset' }}
                        onClick={toggleTheme}
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faMoon} />
                    </div>
                    <Link href="/login" className="text-theme-color hover:text-gray-700 text-theme-color">
                        Login
                    </Link>
                    <Link href="/signup" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 dark:focus:ring-gray-500 py-1">
                        Sign Up
                    </Link>
                    <button className="md:hidden p-2 focus:outline-none" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon width={20} height={20} color={theme === 'dark' ? 'white' : 'black'} icon={faBars} />
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
                    <div className="container mx-auto p-4 space-y-2 theme-background">
                        <Link href="/" className="py-2 block hover:text-gray-700 text-theme-color">Docs</Link>
                        <Link href="/" className="py-2 block hover:text-gray-700 text-theme-color">Pricing</Link>
                        <Link href="/" className="py-2 block hover:text-gray-700 text-theme-color">Status</Link>
                        <Link href="/" className="py-2 block hover:text-gray-700 text-theme-color">FAQs</Link>
                        <Link href="/" className="py-2 block hover:text-gray-700 text-theme-color">Contact Us</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

