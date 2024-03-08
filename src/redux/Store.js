import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
const Store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    devTools: true
});

export default Store;