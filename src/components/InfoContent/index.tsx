import style from './style.module.css'
import Image from 'next/image'


export const InfoContent = () => {
    return (
        <div className={style.description}>
            <div className={style['upper-description']}>
                <h1>Quick solutions, less stress</h1>
            </div>
            <div className={style['lower-description']}>

                <FeatureCard src={"./assets/img/Feature icon.png"} title = "Fix emergencies fast" desc = "Save 20-30 minutes per ticket - no more searching for relevant issues and runbooks"/>
                <FeatureCard src={"./assets/img/Feature icon (1).png"} title = "Universally compatible" desc = "Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system"/>
                <FeatureCard src={"./assets/img/Feature icon (2).png"} title = "Secure for your org" desc = "We keep your data safe by taking top security measures."/>
               
            </div>
        </div>
    )
}

const FeatureCard = ({title, desc, src}:any) => {
    return <>
        <div className={style['left-description']}>
            <img src={src} />
            <h3>
                {title}
            </h3>
            <br>
            </br>
            <p>{desc}</p>
        </div>
    </>
}