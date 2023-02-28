import css from "./TaskCounter.module.css";
import { useSelector } from 'react-redux'
import {getCountedTasks} from "../../redux/selectors";

export const TaskCounter = () => {
    const { active, completed } = useSelector(getCountedTasks)
  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
