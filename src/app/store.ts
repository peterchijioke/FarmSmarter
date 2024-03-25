import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './app.reducer'
import storage from '@react-native-community/async-storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER, PERSIST } from 'redux-persist'
 
 
const persistConfig = {
  key: 'root2',
  storage,
}
 
const rootReducer = combineReducers({
    app:appReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store :any= configureStore({
  reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch