import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
    selectedDay: moment().format('DD.MM'),
}

const { reducer, actions } = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setSelectedDay: (state, action) => {
            state.selectedDay = action.payload;
        },
    }
})

export { actions as userActions };
export { reducer as userReducer };
