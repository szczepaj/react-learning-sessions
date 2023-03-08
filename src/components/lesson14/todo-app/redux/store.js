import {filtersReducer} from "./filters/filters.slice";
import { tasksReducer } from './tasks/tasks.slice'
import { configureStore} from "@reduxjs/toolkit";
import {ourLogger} from "./middleware/logger";

const myApi = {
    tasks: '/api/tasks',
    filters: 'api/filters'
}

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: myApi
        }
    })
        // .concat(ourLogger)
})

//
// const rootReducer = combineReducers({
//     tasks: tasksReducer,
//     filters: filtersReducer
// })
// export const standardReduxStore = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({ myApi }), ourLogger))
