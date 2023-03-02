import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addTaskAction} from "../../redux/tasks/tasks.slice";

export const TaskForm = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(store => store.tasks)

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const latestId = Math.max(...tasks.map(task => task.id))
    const inputValue = form.elements.text.value

    dispatch(addTaskAction(inputValue, latestId + 1))
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
