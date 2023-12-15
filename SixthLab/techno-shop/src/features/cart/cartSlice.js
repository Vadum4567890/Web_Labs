import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    isLoading: false,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
        let newCart = [...state.cart];
        const found = state.cart.find(({ id }) => id === payload.id);
  
        if (found) {
          newCart = newCart.map((item) => {
            return item.id === payload.id
              ? { ...item, quantity: payload.quantity || item.quantity + 1 }
              : item;
          });
        } else newCart.push({ ...payload, quantity: 1 });
        state.cart = newCart;
      },
      removeFromCart: (state, { payload }) => {
        state.cart = state.cart.filter(({ id }) => id !== payload);
      },
  },
});

export const { addItemToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;