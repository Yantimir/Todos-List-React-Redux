import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import toast from "react-hot-toast";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

import Header from "./components/Header/Header";
import { TodosList } from "./components/TodosList/TodosList";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodosFilter } from "./components/TodosFilter/TodosFilter";

import { v4 as uuidv4 } from 'uuid'; /* https://www.npmjs.com/package/uuid */
import { Toaster } from "react-hot-toast"; /* https://react-hot-toast.com/ */

const theme = createTheme({
    palette: {
        primary: {
            main: "#764ABC",
        },
        secondary: {
            main: "rgba(0, 0, 0, 0.54)",
        },
    },
    typography: {
        fontFamily: [
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

function App() {

    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [completed] = useState(false);

    const addTask = () => {
        if (text) {
            dispatch(
                addTodo({
                    id: uuidv4(),
                    text,
                    completed,
                    time: new Date().toLocaleString()
                })
            );
            setText("");
            toast.success("Task Added Successfully");
        }
        // else {
        //     toast.error("You have not created a new task");
        // }
    }
    const addTaskEnter = (e) => {
        if (e.key === "Enter" && text) {
            // dispatch(addTodo({ text }));
            dispatch(addTodo({
                id: uuidv4(),
                text,
                completed,
                time: new Date().toLocaleString()
            }));
            setText("");
            toast.success("Task Added Successfully");
        }
        // else {
        //     toast.error("You have not created a new task");
        // }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth="md"
                sx={{ paddingLeft: "0", paddingRight: "0" }}
            >
                <Header sx={{ pl: "0", pr: "0" }} />
                <TodosFilter />
                <AddTodo
                    text={text}
                    setText={setText}
                    handleInputTextSubmit={addTask}
                    handleKeyPress={addTaskEnter}
                />
                <TodosList />
                <Toaster />
            </Container >
        </ThemeProvider >
    );
}

export default App;
