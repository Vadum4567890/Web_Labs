import React from "react";
import AppRoutes from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from '../../styles/App.module.css';


const App = () => {
  return (
    <div className={styles.App}>
      <Header/>
        <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
