import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import styles from '../../styles/Catalog.module.css';
import { getFilteredProducts, getProducts, getSearchedProducts } from '../../utils/api';
import { Audio } from 'react-loader-spinner';
const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let data;

      if (searchQuery) {
        // Fetch searched products
        data = await getSearchedProducts(searchQuery);
      } else if (sortOrder) {
        // Fetch filtered products
        data = await getFilteredProducts(sortOrder);
      } else {
        // Fetch all products
        data = await getProducts();
      }
  
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery, sortOrder]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const changeSearchToFiltered = () => {
    fetchData();
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter__block}>
        <div className={styles.filters}>
          <div className={styles.filter1}>
            <form>
            
              <select
                onChange={handleSortChange}
                value={sortOrder}
              >
                <option value="all">All</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </form>
          </div>
          <div className={styles.filter1}>
            <form>
              <select onChange={handleSortChange} value={sortOrder}>
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
        {loading ? (
          // Display loader while data is being fetched
          <Audio 
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass />
        ) : (
          // Display products once data fetching is complete
          products.map((product, index) => <Product key={index} product={product} />)
        )}
      </div>
    </div>
  );
};

export default Catalog;
