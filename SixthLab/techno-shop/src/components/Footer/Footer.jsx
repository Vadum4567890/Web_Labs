import React from 'react'
import styles from '../../styles/Footer.module.css'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import LOGO from '../../assets/logotechno.jpg'
import FACEBOOK from '../../assets/footer/facebook.png'
import TWITTER from '../../assets/footer/twitter.png'
import LINKEDIN from '../../assets/footer/linkedin.png'
import GOOGLE from '../../assets/footer/googleplus.png'


const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.block__info}>
                    <div className={styles.block__info_title}>
                        <p>Branding stuff</p>
                    </div>
                    <div className={styles.block__info_description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Itaque, quidem.
                        </p>
                    </div>
                </div>
                <div className={styles.block__logo}>
                    <NavLink to={ROUTES.HOME}>
                        <img src={LOGO} alt='logo'/>
                    </NavLink>
                </div>
                <div className={styles.block__socials}>
                    <div className={styles.block__social}>
                        <a href="https://facebook.com"><img src={FACEBOOK} alt="" /></a>
                    </div>
                    <div className={styles.block__social}>
                        <a href="https://twitter.com"><img src={TWITTER} alt="" /></a>
                    </div>
                    <div className={styles.block__social}>
                        <a href="https://linkedin.com"><img src={LINKEDIN} alt="" /></a>
                    </div>
                    <div className={styles.block__social}>
                        <a href="https://google.com"><img src={GOOGLE} alt="" /></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.privacy}>
                <p>2020 IoT@ Copyright all rights reserved, bla, bla</p>
            </div>
        </div>
    </div>
  )
}

export default Footer