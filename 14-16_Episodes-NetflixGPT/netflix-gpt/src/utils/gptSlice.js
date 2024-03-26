import { createSlice } from "@reduxjs/toolkit";


const gptSilce = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        movieNames: null,
        movieResults: null,
    },

    reducers: {
        toggleGPTSeachView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTMovies: (state, action) => {
            state.movieNames = action.payload;
        }, 
        addTMDBMovies: (state, action) => {
            state.movieResults = action.payload
        }
    }
})

export const {toggleGPTSeachView, addGPTMovies, addTMDBMovies} = gptSilce.actions

export default gptSilce.reducer;