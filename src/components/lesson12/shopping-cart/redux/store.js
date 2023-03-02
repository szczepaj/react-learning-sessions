import {configureStore} from "@reduxjs/toolkit";
import {productsReducer} from "./products.slice";

export const store = configureStore({
    reducer: productsReducer
})