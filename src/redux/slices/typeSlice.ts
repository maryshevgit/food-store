import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Type = {
    type: number,
    typeName: string
}

const initialState: Type = {
    type: 0,
    typeName: ''
}

const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        setType(state, action: PayloadAction<number>) {
            state.type = action.payload
        },
        setTypeName(state, action: PayloadAction<string>) {
            state.typeName = action.payload
        }
    },
})

export const {setType, setTypeName} = typeSlice.actions;

export default typeSlice.reducer