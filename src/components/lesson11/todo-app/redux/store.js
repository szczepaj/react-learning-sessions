import {combineReducers, createStore} from 'redux'

import { devToolsEnhancer } from "@redux-devtools/extension";
import {tasksReducer} from "./tasks/tasks.reducer";
import {filtersReducer} from "./filters/filters.reducer";

const rootReducer = combineReducers({
        tasks: tasksReducer,
        filters: filtersReducer
    })
export const store = createStore(rootReducer,  devToolsEnhancer())
