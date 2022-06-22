import { useDispatch, useSelector } from "react-redux";
import { filterTodos } from "../../store/todoSlice";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

export const TodosFilter = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const sumActive = todos.filter(todo => todo.completed === false);
    const sumDone = todos.filter(todo => todo.completed === true);

    const updateFilterStatus = (status) => {
        dispatch(filterTodos(status));
    }

    return (
        <div style={{ margin: "0 0 20px 20px" }}>
            <FormControl>
                <FormLabel>Filter Tasks</FormLabel>
                <RadioGroup
                    row
                    defaultValue="all"
                >
                    <FormControlLabel
                        value="all"
                        control={<Radio onClick={() => updateFilterStatus("all")} />}
                        label={`All ${todos.length}`}
                    />
                    <FormControlLabel
                        value="active"
                        control={<Radio onClick={() => updateFilterStatus(false)} />}
                        label={`Active ${sumActive.length}`}
                    />
                    <FormControlLabel
                        value="done"
                        control={<Radio onClick={() => updateFilterStatus(true)} />}
                        label={`Done ${sumDone.length}`}
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )
}
