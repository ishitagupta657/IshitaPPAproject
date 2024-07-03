import style from './style.module.css';
import Link from 'next/link'

import Image from 'next/image';
import Toggle from '../Toggle';

export const NavBar = () => {
    return (
        <div className={`${style.header} dark-theme`}>
            <div className={style['left-nav-containts']}>
                <div>
                    <Link href="/">
                        <img className={style.brandicon} src="/assets/img/brandicon.png" width={0} height={0} alt="Brand Logo" />
                    </Link>
                </div>
                <div className={`${style['other-header-containts']} text-theme-color`}>Docs</div>
                <div className={`${style['other-header-containts']} text-theme-color`}>Pricing</div>
                <div className={`${style['other-header-containts']} text-theme-color`}>Status</div>
                <div className={`${style['other-header-containts']} text-theme-color`}>FAQs</div>
                <div className={`${style['other-header-containts']} text-theme-color`}>Contact Us</div>
            </div>
            <div className={style['right-nav-containts']}>
                <Toggle />
                <div className= {`${style['login-btn']}text-theme-color`}>
            
                    <button className={`${style['login']} dark-theme text-theme-color `}>
                    <Link className={'cta-btn'} href="/login"></Link>
                 
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

                 