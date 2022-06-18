import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'; /* https://www.npmjs.com/package/uuid */

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        editId: ""
    },
    reducers: {
        addTodo(state, action) {
            if (action.payload.text.trim() !== "") {
                state.todos.push({
                    id: uuidv4(),
                    text: action.payload.text,
                    completed: false,

                });
            }
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodoCompleted(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        editTodos(state, action) {
            state.edit = state.todos.filter(todo => todo.id === action.payload.id);
            state.editId = action.payload.id;
        },
        backEditTodos(state, action) {
            state.edit = state.todos.filter(todo => todo.id === action.payload.id);
            state.editId = "";
        },
        addEditTodo(state, action) {
            const editText = state.todos.find(todo => todo.id === action.payload.id);
            editText.text = action.payload.editTextTodo;
            editText.completed = false;
            state.editId = "";
        }
    },
});

export const {
    addTodo,
    deleteTodo,
    toggleTodoCompleted,
    editTodos,
    backEditTodos,
    addEditTodo
} = todoSlice.actions;

export default todoSlice.reducer;