import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type User = {
    name: string,
    email: string | null,
    id: string | null,
}

const initialState: User = {
    name: '',
    email: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action:PayloadAction<string | any>) {
            state.name = action.payload;
            state.email = action.payload.email;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;