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
            //TODO
            const books = state.reduce((value, acc) => {
                if (value.id !== action.payload) {
                    return [...acc, value];
                }

                if (value.quantity > 1) {
                    value.quantity--;
                    return [...acc, value];
                }

                return [...acc];
            }, []);

            return books;
        },
    },
});

export const { addBook, removeBook } = cartSlice.actions;
