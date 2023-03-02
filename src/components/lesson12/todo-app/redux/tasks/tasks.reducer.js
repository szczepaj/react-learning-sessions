import {addTaskAction, deleteTaskAction, toggleCompletedAction} from "./tasks.actions";
import {createReducer} from "@reduxjs/toolkit";

const initialTasksState = [
        { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false },
    ]


export const tasksReducer = createReducer(initialTasksState, {
    [addTaskAction]: (state, action) => {
        state.push(action.payload)
    },
    [deleteTaskAction]: (state, action) => {
        const { id } = action.payload
        return  state.filter(task => task.id !== id)
    },
    [toggleCompletedAction]: (state, action) => {
        const { id } = action.payload

        // sposób mutowalny
        // for(const task of state) {
        //     if(task.id === action.payload.id) {
        //         task.completed = !task.completed
        //     }
        // }

        return state.map(task => {
            if(task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task
        })
    }
})