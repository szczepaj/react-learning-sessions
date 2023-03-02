import {filtersReducer} from "./filters/filters.slice";
import { tasksReducer } from './tasks/tasks.slice'
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer
    }
})
