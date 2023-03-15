import {createAction} from "@reduxjs/toolkit";

export const addTaskAction = createAction('tasks/addTask', (text,id ) => ({
    payload: {
        id,
        text,
        completed: false
    }
}))

// addTaskAction.type => tasks/addTask

export const deleteTaskAction = createAction('tasks/deleteTask', id => ({
    payload: { id }
}))

export const toggleCompletedAction = createAction('tasks/toggleCompleted', id => ({
    payload: { id }
}))


// module/action
// MODULE_ACTION_NAME