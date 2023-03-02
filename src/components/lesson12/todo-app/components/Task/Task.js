import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import {useDispatch} from "react-redux";
import {deleteTaskAction, toggleCompletedAction} from "../../redux/tasks/tasks.slice";

export const Task = ({ task }) => {
    const dispatch = useDispatch()
    const toggleTask = evt => {
        dispatch(toggleCompletedAction(task.id))
    }

    const deleteTask = () => {
        dispatch(deleteTaskAction(task.id))
    }
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={toggleTask}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={deleteTask}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
