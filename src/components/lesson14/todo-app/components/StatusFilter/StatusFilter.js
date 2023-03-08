import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setStatusFilterAction} from "../../redux/filters/filters.slice";
import {FilterStatus} from "../../redux/filters/filters.constants";
import {selectActiveStatus} from "../../redux/selectors";

export const StatusFilter = () => {
    const activeStatus = useSelector(selectActiveStatus)
    console.log(activeStatus)
    const dispatch = useDispatch()
    const changeStatus = status => {
        dispatch(setStatusFilterAction(status))
    }

  return (
    <div className={css.wrapper}>
      <Button selected={activeStatus === FilterStatus.ALL} onClick={() => changeStatus(FilterStatus.ALL)}>All</Button>
      <Button selected={activeStatus === FilterStatus.ACTIVE} onClick={() => changeStatus(FilterStatus.ACTIVE)}>Active</Button>
      <Button selected={activeStatus === FilterStatus.COMPLETED} onClick={() => changeStatus(FilterStatus.COMPLETED)}>Completed</Button>
    </div>
  );
};
