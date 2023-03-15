import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchTasks} from "../redux/tasks/tasks.thunk";
import {AppBar} from "../components/AppBar/AppBar";
import {TaskForm} from "../components/TaskForm/TaskForm";
import {TaskList} from "../components/TaskList/TaskList";

export const Todo = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTasks('arg'))
    }, [])

    return (
        <>
            <AppBar />
            <TaskForm />
            <TaskList />
        </>
    );
};