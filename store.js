import { configureStore } from "@reduxjs/toolkit"; //configureStore helps us with setting up the data layer.
import navReducer from "./slices/navSlice"; //where the user store the navigation information.

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
})