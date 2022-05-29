import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './booksSlice';
import { cartSlice } from './cartSlice';
import { infoSlice } from './infoSlice';

const store = configureStore({
    reducer: {
        books: booksSlice.reducer,
        cart: cartSlice.reducer,
        info: infoSlice.reducer,
    },
});

export default store;
