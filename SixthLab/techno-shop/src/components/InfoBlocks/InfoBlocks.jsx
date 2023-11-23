import React from 'react'
import styles from '../../styles/InfoBlocks.module.css'
import TVMONITOR from '../../assets/monitor.jpg'
import PC from '../../assets/pc.jpg'
import COMPONENTS from '../../assets/components.jpg'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import Product from '../Product/Product'

const InfoBlocks = ({products = [], showMore, handleViewMore }) => {
  return (
    <div className={styles.content}>
        <div className={styles.info__blocks}>
            <div className={styles.info__block}>
                <div className={styles.info__block_image}>
                    <img src={TVMONITOR} alt='tvmon'/>
                </div>
                <div className={styles.info__block_title}>
                    <p>TV & Monitors</p>
                </div>
                <div className={styles.info__block_description}>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolor quibusdam, molestias vitae et officiis iste quae 
                    modi alias dolorem, neque obcaecati perferendis, 
                    at eaque tempora saepe sequi distinctio explicabo?
                     Adipisci necessitatibus corrupti fugiat. 
                     Magni quisquam voluptatem deserunt fugit inventore
                      repudiandae quidem placeat enim, aperiam eveniet laboriosam, 
                      dicta explicabo ducimus dolores.
                    </p>
                </div>
            </div>
            <div className={styles.info__block}>
                <div className={styles.info__block_image}>
                    <img src={PC} alt=''/>
                </div>
                <div className={styles.info__block_title}>
                    <p>Laptops & PCs</p>
                </div>
                <div className={styles.info__block_description}>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolor quibusdam, molestias vitae et officiis iste quae 
                    modi alias dolorem, neque obcaecati perferendis, 
                    at eaque tempora saepe sequi distinctio explicabo?
                     Adipisci necessitatibus corrupti fugiat. 
                     Magni quisquam voluptatem deserunt fugit inventore
                      repudiandae quidem placeat enim, aperiam eveniet laboriosam, 
                      dicta explicabo ducimus dolores.
                    </p>
                </div>
            </div>
            <div className={styles.info__block}>
                <div className={styles.info__block_image}>
                    <img src={COMPONENTS} alt=''/>
                </div>
                <div className={styles.info__block_title}>
                    <p>PC & Laptop components</p>
                </div>
                <div className={styles.info__block_description}>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolor quibusdam, molestias vitae et officiis iste quae 
                    modi alias dolorem, neque obcaecati perferendis, 
                    at eaque tempora saepe sequi distinctio explicabo?
                     Adipisci necessitatibus corrupti fugiat. 
                     Magni quisquam voluptatem deserunt fugit inventore
                      repudiandae quidem placeat enim, aperiam eveniet laboriosam, 
                      dicta explicabo ducimus dolores.
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.view__button}>
            <NavLink>
                <button type='button' onClick={handleViewMore}>View More</button>
            </NavLink>
        </div>
        {showMore && (
        <div className={styles.moreInfo}>
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <Product key={index} catalog={true} product={product} />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default InfoBlocks