import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { foodApi } from './services/foodApi'
import typeReducer from './slices/typeSlice'
import userReducer from './slices/userSlice'
import cartReducer from './slices/cartSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    types: typeReducer,
    user: userReducer,
    cart: cartReducer,
    [foodApi.reducerPath]: foodApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(foodApi.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch






