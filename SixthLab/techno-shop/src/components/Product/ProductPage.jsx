import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from '../../styles/ProductPage.module.css';
import { ROUTES } from '../../utils/routes';
import { getProductById } from '../../utils/api';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <div className={styles.container}>
            <div><img src={product.image} alt='img' /></div>
            <div className={styles.product__info}>
              <h1>Product Name: {product.title}</h1>
              <p>Product Name: {product.description}</p>
            </div>
            </div>
            <div className={styles.product__price}>
              <p>Product Name: {product.price}</p>  
              <div className={styles.buttons}>
                <NavLink to={ROUTES.CATALOG}>Go Back</NavLink>
                <NavLink to={ROUTES.CATALOG}>Add to Cart</NavLink>
              </div>
            </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
