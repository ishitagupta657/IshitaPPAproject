import style from './style.module.css'

interface Props{
    theme: string
}

export const Footer = (props: Props) => {
    const { theme } = props
    return (
        <>
            <div className={`${style.footer} theme-background py-2`}>
                <div className={style['left-nav-containts']}>
                    <div className={`${style['other-header-containts']} text-theme-color`}>
                        <img style={{filter: theme != 'dark' ? 'invert(1)' : 'unset'}} className={style.brandicon} src="/assets/img/brandicon.png" width={0} height={0} alt="Brand Logo" />
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

