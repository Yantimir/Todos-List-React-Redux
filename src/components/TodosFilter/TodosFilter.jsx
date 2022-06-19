import { useDispatch} from "react-redux";
import { filterTodos } from "../../store/todoSlice";
import { Box, Button, ButtonGroup } from "@mui/material";

export const TodosFilter = () => {

    const dispatch = useDispatch();
    // const filterStatus = useSelector(state => state.todos.filter);
    const updateFilterStatus = (status) => {
        dispatch(filterTodos(status));
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        mb: 3,
                    },
                }}
            >
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button
                        onClick={() => updateFilterStatus("all")}
                    >
                        All
                    </Button>
                    <Button
                        onClick={() => updateFilterStatus(false)}
                    >
                        Active
                    </Button>
                    <Button
                        onClick={() => updateFilterStatus(true)}
                    >
                        Done
                    </Button>
                </ButtonGroup>

            </Box>
        </>
    )
}
