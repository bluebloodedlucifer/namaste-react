import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSidebarOpen: true,
        popularVideos: null
    },
    reducers: {
        toggleSidebar: (state, action) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        addPopularVideos: (state, action) => {
            state.popularVideos = action.payload
        }
        // pushPopularVideos: (state, action) => {
        //     state.popularVideos.push(action.payload);
        // },
        // popPopularVidoes:(state, action) => {
        //     state.popularVideos.pop();
        // }
    }
})

export const {toggleSidebar, addPopularVideos} = appSlice.actions

export default appSlice.reducer