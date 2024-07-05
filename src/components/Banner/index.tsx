import { BannerProfile } from '../BannerProfile'
import style from './style.module.css'
import Image from 'next/image'

export const Banner = ({ title, subTitle, ctaBtn, showCTA, imageSize }: any) => {
    return (
        <>
            <div className={style.banner}>
                <div className={style['upper-banner']}>
                    <div className={style['bannercontent']}>
                        <div>
                            <h1 className={'section-title text-theme-color'}>{title}</h1>
                        </div>
                        <div className={`${style['sub-heading']}text-theme-color`}>
                       
                            <p>{subTitle}</p>
                        </div>
                        {showCTA ? <div className={style['getstarted-btn']}>
                            <Button ctaBtn={ctaBtn} />
                        </div> : <></>}
                    </div>
                </div>
            <BannerProfile imageSize={imageSize} />

            </div>
        </>
    )
}


const Button = ({ ctaBtn }: any) => {
    return <>
        <button className='cta-btn'>
            {ctaBtn} &nbsp;
            <img src="./assets/img/nextIcon.svg" />
        </button>
    </>
}