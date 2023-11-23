import React from 'react'
import styles from '../../styles/Header.module.css'
import { NavLink } from 'react-router-dom'
import LOGO from '../../assets/logotechno.jpg'
import { ROUTES } from '../../utils/routes'


const Header = () => {
    
  return (
    <div className={styles.header}>
        <div className={styles.header__logo}>
            <NavLink to={ROUTES.HOME}>
                <img src={LOGO} alt='Logo'/>
            </NavLink>
        </div>
        <div className={styles.header__nav_links}>
            <div className={styles.nav__link}>
                <NavLink to={ROUTES.HOME}>
                    <p>Home</p>
                </NavLink>
            </div>
            <div className={styles.nav__link}>
                <NavLink to={ROUTES.CATALOG}>
                    <p>Catalog</p>
                </NavLink>
            </div>
            <div className={styles.nav__link}>
                <NavLink to={ROUTES.CART}>
                    <p>Cart</p>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header