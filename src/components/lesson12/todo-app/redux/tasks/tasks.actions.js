export const TaskActions = {
    ADD_TASK: 'tasks/addTask',
    DELETE_TASK: 'tasks/deleteTask',
    TOGGLE_COMPLETED: 'tasks/toggleCompleted'
}

export const addTaskAction = (text, id) => ({
    type: TaskActions.ADD_TASK,
    payload: {
        id,
        text,
        completed: false
    }
})

export const deleteTaskAction = id => ({
    type: TaskActions.DELETE_TASK,
    payload: { id }
})

export const toggleCompletedAction = id => ({
    type: TaskActions.TOGGLE_COMPLETED,
    payload: { id }
})


// module/action
// MODULE_ACTION_NAME