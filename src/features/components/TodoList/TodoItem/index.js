import React from "react";

const TodoItem = ({ todo, onClickTodo }) => {
    const handleClickTodo = (todo) => {
        if (!onClickTodo) return;
        onClickTodo(todo);
    };
    return <li onClick={() => handleClickTodo(todo)}>{todo.title}</li>;
};

export default TodoItem;
