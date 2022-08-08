import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { coinsSlice } from "./module";

const rootReducer = combineReducers({
    coins: coinsSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});