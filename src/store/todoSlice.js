import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    todos: [],
    editId: "",
    todosFilter: [],
    filter: "all"
}

const filteredTodos = (key, todos) => {
    return todos.filter(todo => {
        if (key === "all") {
            return true;
        }
        return todo.completed === key;
    });
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            state.todosFilter = filteredTodos(state.filter, state.todos);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            state.todosFilter = filteredTodos(state.filter, state.todos);
        },
        toggleTodoCompleted: (state, action) => {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
            state.todosFilter = filteredTodos(state.filter, state.todos);
        },
        editTodos: (state, action) => {
            // state.editId = state.todos.filter(todo => todo.id === action.payload.id);
            state.editId = action.payload.id;
        },
        backEditTodos: (state, action) => {
            // state.editId = state.todos.filter(todo => todo.id === action.payload.id);
            state.editId = "";
        },
        addEditTodo: (state, action) => {
            const editText = state.todos.find(todo => todo.id === action.payload.id);
            editText.text = action.payload.editTextTodo;
            editText.completed = false;
            state.editId = "";
            state.todosFilter = filteredTodos(state.filter, state.todos);
        },
        filterTodos: (state, action) => {
            state.filter = action.payload;
            state.todosFilter = filteredTodos(state.filter, state.todos);
        }
    },
});

export const {
    addTodo,
    deleteTodo,
    toggleTodoCompleted,
    editTodos,
    backEditTodos,
    addEditTodo,
    filterTodos
} = todoSlice.actions;

export default todoSlice.reducer;