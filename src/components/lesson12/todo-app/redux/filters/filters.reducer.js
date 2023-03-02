import { setStatusFilterAction} from "./filters.actions";
import {createReducer} from "@reduxjs/toolkit";

const initialFilterState = {
        status: 'all'
    }

export const filtersReducer = createReducer(initialFilterState, {
    [setStatusFilterAction]: (state, action) => {
        const { status } = action.payload
        return { status }
    }
})