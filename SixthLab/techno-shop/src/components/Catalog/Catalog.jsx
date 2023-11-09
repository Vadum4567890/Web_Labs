import React, { useState } from 'react'
import Product from '../Product/Product';
import styles from '../../styles/Catalog.module.css';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: "Product description",
    price: '200$'
  },
  {
    id: 2,
    title: 'Product 2',
    description: "Product description",
    price: '200$'
  },
  {
    id: 3,
    title: 'Product 3',
    description: "Product description",
    price: '200$'
  },
  {
    id: 4,
    title: 'Product 4',
    description: "Product description",
    price: '200$'
  }
];

const Catalog = () => {
  const [currentFruit, setCurrentFruit] = useState('oranges')
  
  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit)
  }


  return (
    <div className={styles.container}>
      <div className={styles.filter__block}>
        <div className={styles.filters}>
          <div className={styles.filter1}>
            <form>
              <select 
                onChange={(event) => changeFruit(event.target.value)}
                value={currentFruit}
              >
                <option value="apples">Red Apples</option>
                <option value="oranges">Outrageous Oranges</option>
                <option value="tomatoes">Technically a Fruit Tomatoes</option>
                <option value="bananas">Bodacious Bananas</option>
              </select>
            </form>
          </div>
          <div className={styles.filter1}>
            <form>
              <select 
                onChange={(event) => changeFruit(event.target.value)}
                value={currentFruit}
              >
                <option value="apples">Red Apples</option>
                <option value="oranges">Outrageous Oranges</option>
                <option value="tomatoes">Technically a Fruit Tomatoes</option>
                <option value="bananas">Bodacious Bananas</option>
              </select>
            </form>
          </div>
          <div className={styles.filter1}>
            <form>
              <select 
                onChange={(event) => changeFruit(event.target.value)}
                value={currentFruit}
              >
                <option value="apples">Red Apples</option>
                <option value="oranges">Outrageous Oranges</option>
                <option value="tomatoes">Technically a Fruit Tomatoes</option>
                <option value="bananas">Bodacious Bananas</option>
              </select>
            </form>
          </div>
        </div>
        <div className={styles.apply_btn}><p>Apply</p></div>
      </div>
      <div className={styles.products}>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Catalog;