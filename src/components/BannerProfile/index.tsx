import style from './style.module.css'
import Image from 'next/image'

interface PropsType{
    imageSize: string
}

export const BannerProfile = ({imageSize}:PropsType) => {
    console.log(imageSize)
    return (
        <div className={style.Profilebanner}>
            <Image className={imageSize === "large" ? style['Profile-description-large'] : style['Profile-description-smaller']} src="/assets/img/img2.png" width={1024} height={632.53} alt="Profile Page" />
        </div>
    )
}
