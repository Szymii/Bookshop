import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addBook: (state, action) => {
            const book = state.find(({ id }) => id === action.payload.id);

            if (book) {
                book.quantity++;
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        },
        removeBook: (state, action) => {
            const book = state.find(({ id }) => id === action.payload.id);

            if (book.quantity === 1) {
                return state.filter(({ id }) => id !== action.payload.id);
            }

            book.quantity--;
        },
        removeAllBooks: (state, action) => {
            return [];
        },
    },
});

export const { addBook, removeBook, removeAllBooks } = cartSlice.actions;
