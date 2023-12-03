// file to create a redux toolkit slice for the state management of light/dark mode

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "dark",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => { // reducer function to toggle the light mode
            state.mode = state.mode === "light" ? "dark" : "light";
        },
    },
})

console.log(globalSlice);

// destructuring the reducer function to export it
export const { setMode } = globalSlice.actions;

// exporting the reducer property of the stateSlice to be used in the store
export default globalSlice.reducer;