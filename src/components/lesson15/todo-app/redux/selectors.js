import {FilterStatus} from "./filters/filters.constants";
import {createSelector} from "@reduxjs/toolkit";

export const selectTasksList = store => store.tasks.list
export const selectPendingState = store => store.tasks.isPending
export const selectErrorMessage = store => store.tasks.error
export const selectActiveStatus = store => store.filters.status

export const selectFilteredTasks = store => {
    const taskList = selectTasksList(store)
    const activeStatus = selectActiveStatus(store)

    if(activeStatus === FilterStatus.ACTIVE) return taskList.filter(task => !task.completed)
    if(activeStatus === FilterStatus.COMPLETED) return taskList.filter(task => task.completed)

    return taskList
}

export const selectCountedTasks = store => {
    console.log('selecting counted tasks')
    const taskList = selectTasksList(store)

    return taskList.reduce((prev, curr) => {
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

export const selectCountedTasksWithReselect = createSelector([selectTasksList],
    (taskList) => {
        console.log('selecting counted tasks')
        return taskList.reduce((prev, curr) => {
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
})

export const selectFilteredTasksWithReselect = createSelector([selectTasksList, selectActiveStatus],
    (taskList, activeStatus) => {
    console.log('updating selection')

    if(activeStatus === FilterStatus.ACTIVE) return taskList.filter(task => !task.completed)
    if(activeStatus === FilterStatus.COMPLETED) return taskList.filter(task => task.completed)

    return taskList
})

// Wykorzystanie createSelector - różne argumenty
// 1. tablica selektorów
// createSelector([select, select], (selectOutput, selectOutput) => {})
//
// 2. Selektory jako następujące argumenty
// createSelector(select, select,select, select, select, (selectOutput, selectOutput, selectOutput, selectOutput, selectOutput) => {
//
// })

// const selectCustomValue = createSelector([selectSomething, selectSomethingElse], () => {
//     // cos sie dzieje
// })