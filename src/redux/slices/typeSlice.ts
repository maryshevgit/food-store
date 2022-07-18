import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Type = {
    type: number,
    typeName: string,
    id: number
}

const initialState: Type = {
    type: 0,
    typeName: '',
    id: 0
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
        },
        setId(state, action: PayloadAction<number>) {
            state.id = action.payload
        }
    },
})

export const {setType, setTypeName, setId} = typeSlice.actions;

export default typeSlice.reducer