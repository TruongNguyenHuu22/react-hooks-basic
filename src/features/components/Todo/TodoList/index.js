import "./style.scss";

const TodoList = ({ todoList, onClickTodo }) => {
    const handleClickTodo = (todo) => {
        if (!onClickTodo) return;
        onClickTodo(todo);
    };
    return (
        <ul className="todo-list">
            {todoList.map((todo) => (
                <li key={todo.id} onClick={() => handleClickTodo(todo)}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
