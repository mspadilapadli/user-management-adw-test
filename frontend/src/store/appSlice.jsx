"use client";
import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
    name: "app",
    initialState: {
        value: 0,
        dataUsers: [],
    },
    reducers: {
        fetchSucces: (state, action) => {
            state.dataUsers = action.payload;
        },
        fetchLoading: (state, action) => {
            state.dataUsers = action.payload;
        },
        fetchError: (state, action) => {
            state.dataUsers = action.payload;
        },
    },
});

export const { fetchSucces, fetchLoading, fetchError } = appSlice.actions;

export default appSlice.reducer;
