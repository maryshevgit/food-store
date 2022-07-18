import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFood } from "../../types/types";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

type Cart = {
    cart: IFood[],
    orders: IFood[]
    totalPrice: number,
}

const initialState: Cart = {
    cart: [],
    orders: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action:PayloadAction<IFood>){
            const findItem = state.cart.find((obj) => obj.id === action.payload.id);
            
            if (findItem) {
                findItem.count++
            } else {
                state.cart.push({
                    ...action.payload,
                    count: 1
                });
            }
            
            state.totalPrice = calcTotalPrice(state.cart);
        },
        minusItem(state, action:PayloadAction<number>){
            const findItem = state.cart.find((obj) => obj.id === action.payload);
            
            if (findItem) {
                findItem.count--
                if(findItem.count === 0){

                }
            }

            state.totalPrice = calcTotalPrice(state.cart);
        },
        removeItem(state, action: PayloadAction<number>) {
            state.cart = state.cart.filter((obj) => obj.id !== action.payload);
            state.totalPrice = calcTotalPrice(state.cart);
        },
        clearItems(state) {
            state.cart = []
            state.orders = []
            state.totalPrice = 0
        },
        addOrder(state) {
            state.orders = state.cart
        }
    }
})

export const {addItem, minusItem,removeItem,clearItems,addOrder} = cartSlice.actions;

export default cartSlice.reducer