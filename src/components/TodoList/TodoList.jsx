import { Todo } from "../Todo/Todo";
import { useSelector } from "react-redux";

export const TodoList = () => {

    const todos = useSelector(state => state.todos.todos);
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} {...todo}/>)}
        </div>
    )
}
