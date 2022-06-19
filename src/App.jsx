import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

import Header from "./components/Header/Header";
import { TodosList } from "./components/TodosList/TodosList";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodosFilter } from "./components/TodosFilter/TodosFilter";

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

    const addTask = () => {
        if (text !== "") {
            dispatch(addTodo({ text }));
            setText("");
        }
    }
    const addTaskEnter = (e) => {
        if (e.key === "Enter" && text !== "") {
            dispatch(addTodo({ text }));
            setText("");
        }
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
            </Container >
        </ThemeProvider >
    );
}

export default App;
