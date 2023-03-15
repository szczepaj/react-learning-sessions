import {createSlice} from "@reduxjs/toolkit";
import {refreshUser, register, signIn, signOut} from './auth.thunk'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [signIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [signOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, action) {
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.user = action.payload
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});

export const authReducer = authSlice.reducer