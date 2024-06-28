import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
    selectedDay: moment().format('DD.MM'),
    selectedTime: null,
    selectedHall: {
        id: null,
        title: null,
    },
    selectedFilm: {
        id: null,
        title: null,
    },
    selectedChairs: [],
    totalPrice: 0,
}

const { reducer, actions } = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setSelectedDay: (state, action) => {
            state.selectedDay = action.payload;
        },
        setSelectedTime: (state, action) => {
            state.selectedTime = action.payload;
        },
        setSelectedHall: (state, action) => {
            state.selectedHall = action.payload;
        },
        setSelectedFilm: (state, action) => {
            state.selectedFilm = action.payload;
        },
        setSelectedChairs: (state, action) => {
            state.selectedChairs = action.payload;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
    }
})

export { actions as userActions };
export { reducer as userReducer };
