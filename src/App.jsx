import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice"

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

import Header from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";
import { AddTodo } from "./components/AddTodo/AddTodo";

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

    const [text, setText] = useState("");

    const dispatch = useDispatch();
    const addTask = ()  => {
        dispatch(addTodo({text}));
        setText("");
    }

    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth="md"
                sx={{ paddingLeft: "0", paddingRight: "0" }}
            >
                <Header sx={{ pl: "0", pr: "0" }} />
                <AddTodo
                    text={text}
                    setText={setText}
                    handleInputTextSubmit={addTask}
                />
                <TodoList />
            </Container >
        </ThemeProvider >
    );
}

export default App;
