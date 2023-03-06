import { Layout } from "./Layout/Layout";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchTasks} from "../redux/tasks/tasks.thunk";

export const TodoApp = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTasks('arg'))
    }, [])

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
