import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Food = {
    food: any[]
}

const initialState: Food = {
    food: []
}

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        addFood(state, action: PayloadAction<[]>) {
            state.food.push(action.payload)
        }
    },
})

export const {addFood} = foodSlice.actions;

export default foodSlice.reducer