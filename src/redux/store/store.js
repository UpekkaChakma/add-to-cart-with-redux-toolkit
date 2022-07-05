import { configureStore } from "@reduxjs/toolkit";
import userCartItemsReducer from "../slices/userCartItemsSlice";

export const store = configureStore({
    reducer: {
        userCartItems: userCartItemsReducer
    }
})