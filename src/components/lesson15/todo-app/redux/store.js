import { Iterable } from 'immutable'
import {filtersReducer} from "./filters/filters.slice";
import { tasksReducer } from './tasks/tasks.slice'
import {configureStore, createSerializableStateInvariantMiddleware, isPlain} from "@reduxjs/toolkit";
import {persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import {authReducer} from "./auth/auth.slice";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

const myApi = {
    tasks: '/api/tasks',
    filters: 'api/filters'
}

const tasksPersistConfig = {
    key: 'tasks',
    storage,
    whitelist: ['list']
};

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'user']
};


export const store = configureStore({
    reducer: {
        tasks: persistReducer(tasksPersistConfig, tasksReducer),
        filters: filtersReducer,
        auth: persistReducer(authPersistConfig, authReducer)
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: myApi
        },
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})

export const persistor = persistStore(store)
