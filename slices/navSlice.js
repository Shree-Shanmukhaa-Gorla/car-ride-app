import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTime: null,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: { //this is the one that dispatches commands into the data layer to update the state.
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTime: (state, action) => {
            state.travelTime = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTime} = navSlice.actions;

//Selectors - way to pull data from the layer and use them.

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTime = (state) => state.nav.travelTime;

export default navSlice.reducer; 