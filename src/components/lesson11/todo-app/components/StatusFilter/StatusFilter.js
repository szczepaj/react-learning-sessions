import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setStatusFilterAction} from "../../redux/filters/filters.actions";
import {FilterStatus} from "../../redux/filters/filters.constants";

export const StatusFilter = () => {
    const activeStatus = useSelector(store => store.filters.status)
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
