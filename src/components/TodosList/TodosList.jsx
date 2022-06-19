import { Todo } from "../Todo/Todo";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const TodosList = () => {

    // const todos = useSelector(state => state.todos.todos);
    const todosFilter = useSelector(state => state.todos.todosFilter);
    // console.log(todosFilter)

    return (
        <>
            {todosFilter.length > 0
                ? todosFilter.map(todo => (<Todo key={todo.id} {...todo} />))
                : <div className="todo__info">
                    <InfoOutlinedIcon sx={{color: "red", mr: "10px"}} />
                    <Typography
                        variant="h6"
                    >
                        No tasks content
                    </Typography>
                </div>

            }
        </>
    )
}
