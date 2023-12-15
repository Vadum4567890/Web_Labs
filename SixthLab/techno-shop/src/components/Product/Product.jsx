import React from 'react';
import styles from '../../styles/Product.module.css';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';


const Product = ({ catalog, product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.item}>
        <p>Item1</p>
      </div>
      <div className={styles.product__img}>
        <Link className={styles.product_image}>
          <img src={product.image} alt='headphones' />
        </Link>
      </div>
      <div className={styles.product__description}>
        <div className={styles.product__description__title}>
          <p>{product.title}</p>
        </div>
        <div className={styles.product__description__desc}>
          <p>{product.description}</p>
        </div>
        <div className={styles.product__description__nameprice}>
          <p>Price: </p>
          <p>{product.price}</p>
        </div>
        <div className={styles.product__details_btn}>
          { catalog === true ? (
            <NavLink to={`catalog/${product.id}`}>
              <p>View more</p>
            </NavLink>
          ) : (
            <NavLink to={`${product.id}`}>
              <p>View more</p>
            </NavLink>
          )
          }
          
            
          
        </div>
      </div>
    </div>
  );
}

export default Product;
