import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { loginSlice } from '../views/login/reducer';

const persistConfig = {
    key: 'login',
    storage,
    timeout: null,
}

const combinedReducers =  combineReducers({
    login: loginSlice.reducer,
    home: loginSlice.reducer 
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }), process.env.NODE_ENV==="development" ? logger : null], 

});

export const persistedStore = persistStore(store);