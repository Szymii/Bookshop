import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (page) => {
    const response = await axios.get(
        `http://127.0.0.1:3001/api/books?page=${page}`
    );
    const books = response.data.data;
    const metadata = response.data.metadata;
    return { books, metadata };
});

const initialState = {
    loading: false,
    page: 1,
    records_per_page: null,
    total_records: null,
    books: [],
};

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state, action) => {
            return { ...state, loading: true };
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            return { ...state, loading: 'error' };
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            const books = action.payload.books;
            const page = action.payload.metadata.page;
            const records_per_page = action.payload.metadata.records_per_page;
            const total_records = action.payload.metadata.total_records;

            return {
                ...state,
                books,
                page,
                records_per_page,
                total_records,
                loading: false,
            };
        });
        builder.addDefaultCase((state, action) => state);
    },
});
