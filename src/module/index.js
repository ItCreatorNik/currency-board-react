import { createSlice } from "@reduxjs/toolkit";

export const coinsSlice = createSlice({
    name: "coins",
    initialState: {
        coins: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        failLoading: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        finishLoading: (state, { payload }) => {
            state.isLoading = false;
            state.error = null;

            state.coins = payload
        },
    },
});
