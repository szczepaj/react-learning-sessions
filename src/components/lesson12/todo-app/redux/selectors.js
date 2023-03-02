import {FilterStatus} from "./filters/filters.constants";

export const getFilteredTasks = store => {
    const { filters, tasks} = store
    if(filters.status === FilterStatus.ACTIVE) return tasks.filter(task => !task.completed)
    if(filters.status === FilterStatus.COMPLETED) return tasks.filter(task => task.completed)

    return tasks
}

export const getCountedTasks = store => {
    return store.tasks.reduce((prev, curr) => {
        if(curr.completed) {
            return {
                ...prev,
                completed: prev.completed + 1
            }
        } else {
            return {
                ...prev,
                active: prev.active + 1
            }
        }
    }, { completed: 0, active: 0 })
}