import {createSlice} from "@reduxjs/toolkit";

const initialFilterState = {
    status: 'all'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialFilterState,
    reducers: {
        setStatusFilterAction(state, action) {
            state.status = action.payload
        }
    }
})

export const { setStatusFilterAction } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer