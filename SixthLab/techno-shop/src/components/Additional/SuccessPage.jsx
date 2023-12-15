import React from 'react';
import OK from '../../assets/image.png'
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import styles from '../../styles/SuccessPage.module.css';

const SuccessPage = () => {
  return (
    <section className={styles.successpage}>
      <img src={OK} alt="ok" />
      <h2>Your order was successfully placed!</h2>
      <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
      <NavLink to={ROUTES.CATALOG}>Go back to catalog page</NavLink>
    </section>
  );
};

export default SuccessPage;