import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    cartItems: [],
}

const showToast = (value, title, pluralFormOfTitle) => {
    value <= 1 ? toast.success(`${value} ${title} added to cart`) :
        toast.success(`${value} ${pluralFormOfTitle} added to cart`)
}

export const userCartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity, name, plural } = action.payload;
            if (state.cartItems.length <= 0) {
                state.cartItems.push(action.payload);
                showToast(quantity, name, plural)

            } else {

                const foundedItem = state.cartItems.find(item => item.id === id);
                if (foundedItem && foundedItem !== undefined) {
                    foundedItem.quantity = foundedItem.quantity + quantity;

                    // const index = state.cartItems.findIndex(item => item.id === id);
                    // if (index >= 0) {
                    //     state.cartItems[index] = { ...state.cartItems[index], quantity: state.cartItems[index].quantity + quantity };
                    showToast(quantity, name, plural)
                } else {
                    state.cartItems.push(action.payload);
                    showToast(quantity, name, plural)
                }
            }
        },

        removeFromCart: (state, action) => {
            const foundedItemIndex = state.cartItems.findIndex(item => item.id === action.payload);
            if (foundedItemIndex >= 0) {
                state.cartItems.splice(foundedItemIndex, 1);
                toast.error("removed from cart")
            }
        }

    }
})

export const { addToCart, removeFromCart } = userCartItemsSlice.actions;

export default userCartItemsSlice.reducer;

