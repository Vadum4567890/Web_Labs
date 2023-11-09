import React from 'react'
import styles from '../../styles/Home.module.css'

import MAINIMG from '../../assets/technoshoptitle.jpg'
import InfoBlocks from '../InfoBlocks/InfoBlocks'

const Home = () => {

  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.main__image}>
                <img src={MAINIMG}  alt='mainimage' />
            </div>
            <div className={styles.main__info}>
                <div className={styles.info__title}>
                    <h1>Techno Shop: Your Ultimate Destination for Cutting-Edge Tech Products</h1>
                </div>
                <div className={styles.info__description}>
                    <p>Welcome to Techno Shop, your one-stop online destination for all things tech! Whether you're a tech enthusiast, a professional looking for the latest gadgets, or just someone who appreciates the convenience and excitement that technology brings to our lives, we've got you covered.
                        At Techno Shop, we are passionate about technology and innovation. Our website is a carefully curated marketplace featuring a wide range of techno products that cater to various interests and needs. From the latest smartphones and laptops to smart home devices, wearables, gaming gear, and more, we bring
                         you the hottest tech products from leading brands and emerging innovators in the industry.</p>
                </div>
            </div>
        </div>
        <InfoBlocks/>
    </div>
    
  )
}

export default Home