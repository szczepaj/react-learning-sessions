import {TaskActions} from "./tasks.actions";

const initialTasksState = [
        { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false },
    ]

export const tasksReducer = (state = initialTasksState, action) => {
    switch(action.type) {
        case TaskActions.ADD_TASK: {
            const { id, text, completed } = action.payload
            return state.concat({ id, text, completed })

        }
        case TaskActions.DELETE_TASK: {
            const { id } = action.payload
            return  state.filter(task => task.id !== id)

        }
        case TaskActions.TOGGLE_COMPLETED: {
            const { id } = action.payload
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
        default:
            return state
    }
}