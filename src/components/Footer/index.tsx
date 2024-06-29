import style from './style.module.css'
import Image from 'next/image'

export const Footer = () => {
    return (
        <>
            <div className={`${style.Footer} dark-theme`}>
                <div className={style['left-nav-containts']}>
                    <div className='Company-title'>
                        <img className={style.brandicon} src="/assets/img/brandicon.png" width={0} height={0} alt="Brand Logo" />
                    </div>
                </div>
                <div className={style['right-nav-containts']}>
                    <div className={style['other-header-containts']}>contact us</div>
                    <div className={style['other-header-containts']}>terms of service</div>
                </div>
            </div>
        </>
    )
}
