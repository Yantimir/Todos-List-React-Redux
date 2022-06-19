import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'; /* https://www.npmjs.com/package/uuid */

const filteredTodos = (key, todos) => {
    return todos.filter(todo => {
        if (key === "all") {
            return true;
        }
        return todo.completed === key;
    });
}

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            // {
            //     id: uuidv4(),
            //     text: "React",
            //     completed: false,
            // },
            // {
            //     id: uuidv4(),
            //     text: "JavaScript",
            //     completed: false,
            // },
            // {
            //     id: uuidv4(),
            //     text: "Redux",
            //     completed: true,
            // },
        ],
        editId: "",
        todosFilter: [],
        filter: "all"
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: uuidv4(),
                text: action.payload.text,
                completed: false,
            });

            state.todosFilter = filteredTodos(state.filter, state.todos);
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);

            state.todosFilter = filteredTodos(state.filter, state.todos);
        },
        toggleTodoCompleted(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;

            state.todosFilter = filteredTodos(state.filter, state.todos);
        },
        editTodos(state, action) {
            state.editId = state.todos.filter(todo => todo.id === action.payload.id);
            state.editId = action.payload.id;
        },
        backEditTodos(state, action) {
            state.editId = state.todos.filter(todo => todo.id === action.payload.id);
            state.editId = "";
        },
        addEditTodo(state, action) {
            const editText = state.todos.find(todo => todo.id === action.payload.id);
            editText.text = action.payload.editTextTodo;
            editText.completed = false;
            state.editId = "";

            state.todosFilter = filteredTodos(state.filter, state.todos);
        },
        filterTodos(state, action) {
            state.filter = action.payload;
            state.todosFilter = filteredTodos(state.filter, state.todos);
            
            // let filterTodoList = state.todos.filter(todo => {
            //     if (state.filter === "all") {
            //         return true;
            //     }
            //     return todo.completed === state.filter;
            // });
            // state.todos = filterTodoList;
            // console.log(state.todos)
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