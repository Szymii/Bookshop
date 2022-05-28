import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './booksSlice';

const store = configureStore({
    reducer: {
        books: booksSlice.reducer,
    },
});

export default store;
