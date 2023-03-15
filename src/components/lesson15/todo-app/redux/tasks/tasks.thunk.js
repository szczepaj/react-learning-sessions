import {addTask, deleteTask, getTasks, toggleTask} from "../../components/api";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk('tasks/getTasks', async (_arg, thunkAPI) => {
    const { tasks } = thunkAPI.getState()
    if(tasks?.list.length !== 0) return []

    try {
        const response = await getTasks()

        return response.tasks
    } catch (e) {
        throw new Error('Cant fetch tasks')
        return thunkAPI.rejectWithValue('There was a problem while fetching')
    }
})

export const deleteSelectedTask = createAsyncThunk('tasks/deleteTask', async (id, {rejectWithValue}) => {
    try {
        const response = await deleteTask(id)

        return id
    } catch (e) {
        return rejectWithValue(e)

    }
})

export const toggleSelectedTask = createAsyncThunk('tasks/toggleTask', async (id, {rejectWithValue}) => {
    try {
        const response = await toggleTask(id)

        return id
    } catch (e) {
        return rejectWithValue(e)

    }
})

export const addNewTask = createAsyncThunk('tasks/addTask', async ({id, text}, {rejectWithValue}) => {
    try {
        const response = await addTask(text)

        return {
            id,
            text,
            completed: false
        }
    } catch (e) {
        return rejectWithValue(e)

    }
})
