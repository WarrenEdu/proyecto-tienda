import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import cartSlice from "./slices/cart.slice";
import purchasesSlice from "./slices/purchases.slice";

const store = configureStore({
    reducer: {
        products,
        cartSlice,
        purchasesSlice,
    }
});

export default store;