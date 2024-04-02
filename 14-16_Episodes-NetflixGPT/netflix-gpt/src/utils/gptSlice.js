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
        setTrueGPTSeachView: (state, action) => {
            state.showGPTSearch = true
        },
        setFalseGPTSeachView: (state, action) => {
            state.showGPTSearch = false
        },
        addGPTMovies: (state, action) => {
            state.movieNames = action.payload;
        }, 
        addTMDBMovies: (state, action) => {
            state.movieResults = action.payload
        }
    }
})

export const {toggleGPTSeachView, addGPTMovies, addTMDBMovies, setTrueGPTSeachView, setFalseGPTSeachView} = gptSilce.actions

export default gptSilce.reducer;