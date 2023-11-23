import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import styles from '../../styles/Catalog.module.css';
import { getProducts } from '../../utils/api';

// const products = [
//   {
//     id: 1,
//     title: 'Aroduct  1',
//     imageUrl: 'https://cdn.vibox.co.uk/uploads/240/conversions/main.png-medium.png',
//     description: "Product description",
//     price: '1990$'
//   },
//   {
//     id: 2,
//     title: 'Rroduct 2',
//     description: "Product description",
//     price: '200$'
//   },
//   {
//     id: 3,
//     title: 'Psroduct 3',
//     description: "Product description",
//     price: '20023$'
//   },
//   {
//     id: 4,
//     title: 'Zroduct 4',
//     description: "Product description",
//     price: '2001$'
//   }
// ];


const Catalog = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }; 
    fetchData();
  }, []);



  const [currentProduct, setCurrentProduct] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [titleSortOrder, setTitleSortOrder] = useState('');
  const [priceSortOrder, setPriceSortOrder] = useState('');
  const [results, setSearchResults] = useState(products);

  const changeProduct = (newProduct) => {
    setCurrentProduct(newProduct);
  };

  const toggleTitleSortOrder = () => {
    setTitleSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const togglePriceSortOrder = () => {
    setPriceSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const applySorting = (filteredProducts) => {
    return filteredProducts.slice().sort((a, b) => {
      if (currentProduct === 'asc' || currentProduct === 'desc') {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleSortOrder === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
      }

      if (currentProduct === 'lowToHigh' || currentProduct === 'highToLow') {
        const priceA = parseInt(a.price.replace('$', ''), 10);
        const priceB = parseInt(b.price.replace('$', ''), 10);
        return priceSortOrder === 'asc' ? priceA - priceB : priceB - priceA;
      }

      return 0; // Default case
    });
  };

  const changeSearchToFiltered = () => {
    const filteredProducts = applySorting(products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ));
    setSearchResults(filteredProducts);
    console.log(results)
  };

  useEffect(() => {
    console.log(results);
  }, [results]);
  return (
    <div className={styles.container}>
      <div className={styles.filter__block}>
        <div className={styles.filters}>
          <div className={styles.filter1}>
            <form>
              <select
                onChange={(event) => {
                  changeProduct(event.target.value);
                  toggleTitleSortOrder();
                }}
                value={currentProduct}
              >
                <option value="all">All</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </form>
          </div>
          <div className={styles.filter1}>
            <form>
              <select
                onChange={(event) => {
                  changeProduct(event.target.value);
                  togglePriceSortOrder();
                }}
                value={currentProduct}
              >
                <option value="all">All</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </form>
          </div>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles.apply_btn}>
          <button onClick={changeSearchToFiltered}>Apply</button>
        </div>
      </div>
      <div className={styles.products}>
        {results.map((product, index) => (
          <Product key={index} product={product} />
          
        ), console.log(results))}
      </div>
    </div>
  );
};

export default Catalog;
