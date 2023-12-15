import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import Cart from '../Cart/Cart';
import Catalog from '../Catalog/Catalog';
import Home from '../Home/Home';
import ProductPage from '../Product/ProductPage';
import Checkout from '../Checkout/Checkout';
import SuccessPage from '../Additional/SuccessPage';

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />}/>
        <Route path={ROUTES.CATALOG} element={<Catalog />} />
        <Route path={ROUTES.CART} element={<Cart />}/>
        <Route path={ROUTES.PRODUCT} element={<ProductPage/>}/>
        <Route path={ROUTES.CHECKOUT} element={<Checkout/>}/>
        <Route path={ROUTES.SUCCESS} element={<SuccessPage/>}/>
    </Routes>
)
export default AppRoutes;