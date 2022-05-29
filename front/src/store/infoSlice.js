import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

export const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        addInfo: (state, action) => {
            return action.payload;
        },
        removeInfo: (state, action) => {
            return null;
        },
    },
});

export const { addInfo, removeInfo } = infoSlice.actions;
