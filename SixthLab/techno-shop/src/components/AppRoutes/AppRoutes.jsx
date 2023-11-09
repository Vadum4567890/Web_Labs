import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import Cart from '../Cart/Cart';
import Catalog from '../Catalog/Catalog';
import Home from '../Home/Home';

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />}/>
        <Route path={ROUTES.CATALOG} element={<Catalog />} />
        <Route path={ROUTES.CART} element={<Cart />}/>
    </Routes>
)
export default AppRoutes;