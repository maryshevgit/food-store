import { combineReducers, configureStore } from '@reduxjs/toolkit'
import typeReducer from './slices/typeSlice'
import userReducer from './slices/userSlice'
import foodReducer from './slices/foodSlice'

const rootReducer = combineReducers({
    types: typeReducer,
    user: userReducer,
    food: foodReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

