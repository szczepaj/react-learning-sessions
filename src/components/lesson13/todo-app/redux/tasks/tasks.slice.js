import {createSlice} from "@reduxjs/toolkit";
import {addNewTask, deleteSelectedTask, fetchTasks, toggleSelectedTask} from "./tasks.thunk";

const initialTasksState = {
    isPending: false,
    error: null,
    list: []
}

const handlePendingState = (state) => {
    state.isPending = true
}

const handleRejection = (state, action) => {
    state.isPending = false
    state.error = action.payload
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    extraReducers: {
        [fetchTasks.pending]: handlePendingState,
        [deleteSelectedTask.pending]: handlePendingState,
        [toggleSelectedTask.pending]: handlePendingState,
        [addNewTask.pending]: handlePendingState,
        [fetchTasks.rejected]:handleRejection,
        [deleteSelectedTask.rejected]:handleRejection,
        [toggleSelectedTask.rejected]: handleRejection,
        [addNewTask.rejected]: handleRejection,
        [fetchTasks.fulfilled]: (state, action) => {
            state.isPending = false
            state.list.push(...action.payload)
        },
        [deleteSelectedTask.fulfilled]: (state, action) => {
            const index = state.list.findIndex(
                task => task.id === action.payload
            );
            state.list.splice(index, 1);
        },
        [toggleSelectedTask.fulfilled]: (state, action) => {
            const index = state.list.findIndex(
                task => task.id === action.payload
            );

            state.list[index].completed = !state.list[index].completed
        },
        [addNewTask.fulfilled]: (state, action) => {
            state.list.push(action.payload)
        },
    }
})

export const { getTasksRejected, getTasksSuccessful } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer