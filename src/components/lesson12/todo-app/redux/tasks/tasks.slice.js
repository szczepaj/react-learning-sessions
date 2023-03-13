import {createSlice} from "@reduxjs/toolkit";

const initialTasksState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
]

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    reducers: {
        addTaskAction: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(text,id ) {
                return  {
                    payload: {
                        id,
                        text,
                        completed: false
                    }
                }
            }
        },
        deleteTaskAction: {
            reducer(state, action) {
                const id = action.payload
                return state.filter(task => task.id !== id)
            },
            prepare(id) { // domyslny sposób generowania akcji przez redux toolkita w slice
                return {
                    payload: id
                }
            }

        },
        toggleCompletedAction(state, action) {
            const id = action.payload
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
    }
})

export const { addTaskAction, deleteTaskAction, toggleCompletedAction } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer