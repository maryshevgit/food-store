import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { foodApi } from './services/foodApi'
import typeReducer from './slices/typeSlice'
import cartReducer from './slices/cartSlice'

const rootReducer = combineReducers({
    types: typeReducer,
    cart: cartReducer,
    [foodApi.reducerPath]: foodApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(foodApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

