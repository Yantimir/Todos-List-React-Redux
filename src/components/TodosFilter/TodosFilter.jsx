import { useDispatch } from "react-redux";
import { filterTodos } from "../../store/todoSlice";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

export const TodosFilter = () => {

    const dispatch = useDispatch();
    const updateFilterStatus = (status) => {
        dispatch(filterTodos(status));
    }

    return (
        <div style={{margin: "0 0 20px 20px"}}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Filter Tasks</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="all"
                >
                    <FormControlLabel
                        value="all"
                        control={<Radio onClick={() => updateFilterStatus("all")}/>}
                        label="All"
                    />
                    <FormControlLabel
                        value="active"
                        control={<Radio onClick={() => updateFilterStatus(false)}/>}
                        label="Active"
                    />
                    <FormControlLabel
                        value="done"
                        control={<Radio onClick={() => updateFilterStatus(true)}/>}
                        label="Done"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )
}
