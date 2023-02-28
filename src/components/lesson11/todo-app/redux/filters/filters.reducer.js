import {FilterActions} from "./filters.actions";

const initialFilterState = {
        status: 'all'
    }

export const filtersReducer = (state = initialFilterState, action) => {
    switch(action.type) {
        case FilterActions.SET_STATUS: {
            const { status } = action.payload
            return { status }
        }
        default:
            return state
    }
}
