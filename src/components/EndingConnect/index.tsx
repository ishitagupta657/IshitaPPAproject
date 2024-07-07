import Link from 'next/link'
import style from './style.module.css'
import Image from 'next/image'


export const EndingConnect = () => {
    return (
    <div className={style.contactus}>
        <div>
            <h1 className={`section-title text-theme-color`}>Get in touch</h1>
        </div>
        <div className={`${style['middlepart']} text-theme-color`}>
            <h5>Request a demo, or hop on a call.</h5>
        </div>
        <div className={style['lowerpart']}>
            <Link href="/" className="flex text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 dark:focus:ring-gray-500 py-2">
                Get started&nbsp;&nbsp;<img src="./assets/img/nextIcon.svg" alt="Next Icon" />
            </Link>
        </div>
    </div>
    )
}
