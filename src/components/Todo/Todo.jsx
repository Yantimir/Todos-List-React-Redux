import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodoCompleted, editTodos, backEditTodos, addEditTodo } from "../../store/todoSlice";
import { Add, Delete, Edit, Replay } from "@mui/icons-material";
import { Checkbox, IconButton, Paper, TextField, Typography } from "@mui/material";

export const Todo = ({ id, text, completed, time }) => {

    const [editTextTodo, setEditTextTodo] = useState(text);
    const dispatch = useDispatch();
    const editId = useSelector(state => state.todos.editId);
    let flagCompleted = completed ? { textDecoration: "line-through" } : { textDecoration: "none" };

    const editTask = () => {
        dispatch(addEditTodo({ id, editTextTodo }));
    }

    return (
        <div className="todo__list" key={id}>
            <Paper sx={{ p: "10px" }}>
                {id === editId
                    ? (
                        <div className="todo__list-inner">
                            <TextField
                                onChange={(e) => setEditTextTodo(e.target.value)}
                                value={editTextTodo}
                                sx={{ mr: "15px" }}
                                fullWidth={true}
                                size="small"
                                variant="outlined"
                                autoComplete="off"
                                multiline={true}
                                maxRows={10}
                            />
                            <IconButton
                                onClick={editTask}
                            >
                                <Add />
                            </IconButton>

                            <IconButton onClick={() => dispatch(backEditTodos({ id }))}>
                                <Replay />
                            </IconButton>
                        </div>
                    ) : (
                        <div className="todo__list-inner">
                            <div className="todo__list-text">
                                <Checkbox
                                    size="small"
                                    checked={completed}
                                    onClick={() => dispatch(toggleTodoCompleted({ id }))}
                                />
                                <div>
                                    <Typography
                                        variant="h6"
                                        sx={flagCompleted}
                                    >
                                        {text}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                    >
                                        {time}
                                    </Typography>
                                </div>
                            </div>
                            <div className="todo__list-controll">
                                <IconButton
                                    onClick={() => dispatch(editTodos({ id }))}
                                >
                                    <Edit />
                                </IconButton>
                                <IconButton
                                    onClick={() => dispatch(deleteTodo({ id }))}
                                >
                                    <Delete />
                                </IconButton>
                            </div>
                        </div>
                    )
                }
            </Paper>
        </div>
    )
}
