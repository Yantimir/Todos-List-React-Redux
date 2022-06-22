import { useDispatch, useSelector } from "react-redux";
import { filterTodos } from "../../store/todoSlice";
import { Button, ButtonGroup } from "@mui/material";

export const TodosFilter = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const sumActive = todos.filter(todo => todo.completed === false);
    const sumDone = todos.filter(todo => todo.completed === true);

    const updateFilterStatus = (status) => {
        dispatch(filterTodos(status));
    }

    return (
        <div className="filter__status">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => updateFilterStatus("all")}>{`All ${todos.length}`}</Button>
                <Button onClick={() => updateFilterStatus(false)}>{`Active ${sumActive.length}`}</Button>
                <Button onClick={() => updateFilterStatus(true)}>{`Done ${sumDone.length}`}</Button>
            </ButtonGroup>
        </div>
    )
}
