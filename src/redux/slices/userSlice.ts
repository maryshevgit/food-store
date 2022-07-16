import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, IUser } from "../../types/types";

const initialState: AuthState = {
    user: null,
    loading: false,
    error: '',
    authenticated: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
            state.authenticated = false;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        removeUser(state, action: PayloadAction<IUser>) {
            state.user = null;
            state.authenticated = false;
            state.loading = true;
        }
    },
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer