import api from "../api/shop";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('products/getProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await api.getProducts()
        return response
    } catch (e) {
        return rejectWithValue(e)
    }
})

export const productsCheckout = createAsyncThunk('products/checkout', async (cartIds, { rejectWithValue }) => {
    try {
        const response = await api.buyProducts(cartIds)
        return response.message
    } catch (e) {
        return rejectWithValue(e.message)
    }
})