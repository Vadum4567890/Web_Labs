import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

import MAINIMG from '../../assets/technoshoptitle.jpg'
import InfoBlocks from '../InfoBlocks/InfoBlocks'
import { getProducts } from '../../utils/api'

const Home = () => {
    const [products, updateProducts] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getProducts();
          updateProducts(data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchData();
    }, [updateProducts]);
  
    const handleViewMore = () => {
        setShowMore(true);
      };

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
        <InfoBlocks products={products} showMore={showMore} handleViewMore={handleViewMore}/>
    </div>
    
  )
}

export default Home