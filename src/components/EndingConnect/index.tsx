import style from './style.module.css'
import Image from 'next/image'


export const EndingConnect = () => {
    return (
        <div className={style.contactus}>
            <div className={style['upperpart']}><h1>Get in touch</h1></div>
            <div className={style['middlepart']}><h5>Request a demo, or hop on a call.</h5></div>
            <div className={style['lowerpart']}><button>Get started <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.63672L5 5.63672L1 1.63672" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </button></div>


        </div>
    )
}
