import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/localauthslice.js';
import { authapiSlice } from "./slices/authapiendpoints.js";
import { blogApiSlice } from "./slices/blogapislice.js";
const store = configureStore({
    reducer:{
        auth: authReducer,
        [authapiSlice.reducerPath] : authapiSlice.reducer,
        [blogApiSlice.reducerPath]: blogApiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(authapiSlice.middleware),
    devTools: true

});

export default store;