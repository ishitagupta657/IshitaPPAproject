import style from './style.module.css'
import Image from 'next/image'

export const Footer = () => {
    return (
        <>
            <div className={`${style.footer} dark-theme`}>
                <div className={style['left-nav-containts']}>
                    <div className={`${style['other-header-containts']} text-theme-color`}>
                        <img className={style.brandicon} src="/assets/img/brandicon.png" width={0} height={0} alt="Brand Logo" />
                    </div>
                </div>
                <div className={style['right-nav-containts']}>
                    <div className={`${style['other-header-containts']} text-theme-color`}>contact us</div>
                    <div className={`${style['other-header-containts']} text-theme-color`}>terms of service</div>
                </div>
            </div>
        </>
    )
}

