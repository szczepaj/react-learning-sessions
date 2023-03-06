import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import {useDispatch} from "react-redux";
import {deleteSelectedTask, toggleSelectedTask} from "../../redux/tasks/tasks.thunk";

export const Task = ({ task }) => {
    const dispatch = useDispatch()
    const toggleTask = evt => {
        dispatch(toggleSelectedTask(task.id))
    }

    const deleteTask = () => dispatch(deleteSelectedTask(task.id))
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
