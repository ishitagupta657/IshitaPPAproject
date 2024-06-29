import style from './style.module.css'
import Image from 'next/image'
export const NavBar = () => {
    return <>
        <div className={`${style.header} dark-theme`}>
            <div className={style['left-nav-containts']}>
                <div>
                    <img className={style.brandicon} src="/assets/img/brandicon.png" width={0} height={0} alt="Brand Logo" />
                </div>
                <div className={style['other-header-containts']}>Docs</div>
                <div className={style['other-header-containts']}>Pricing</div>
                <div className={style['other-header-containts']}>Status</div>
                <div className={style['other-header-containts']}>FAQs</div>
                <div className={style['other-header-containts']}>Contact Us</div>
            </div>
            <div className={style['right-nav-containts']}>
                <div className={style['login-btn']}>
                    <button className={style['login']}>
                        Login
                    </button>
                </div>
                <div>
                    <button className={'cta-btn'}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    </>
}