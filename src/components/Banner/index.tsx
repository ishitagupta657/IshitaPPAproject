import style from './style.module.css'
import Image from 'next/image'

export const Banner = ({ title, subTitle, ctaBtn, showCTA }: any) => {
    return (
        <div className={style.Banner}>
            <div className={style['upper-banner']}>
                <div className={style['bannercontent']}>
                    <div className={style['main-heading']}>
                        <h1 className={style.intro}>{title}</h1>
                    </div>
                    <div className={style['sub-heading']}>
                        <p>{subTitle}</p>
                    </div>
                    {showCTA ? <div className={style['getstarted-btn']}>
                        <Button ctaBtn={ctaBtn} />
                    </div> : <></>}
                </div>
            </div>
        </div>
    )
}


const Button = ({ ctaBtn }:any) => {
    return <>
        <button>
            {ctaBtn}
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </>
}