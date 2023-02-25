import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./style.scss";

const TodoFeature = () => {
    const initTodoList = [
        {
            id: 1,
            title: "I love React",
        },
        {
            id: 2,
            title: "You love React",
        },
        {
            id: 3,
            title: "We love React",
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleRemoveTodo = (todo) => {
        if (!todo) return;
        const newTodoList = [...todoList];
        const newList = newTodoList.filter((x) => x.id !== todo.id);
        setTodoList(newList);
    };

    return (
        <>
            <h3>UseState - Todo List</h3>
            <ul className="todo-list">
                {todoList.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...{ todo }}
                        onClickTodo={handleRemoveTodo}
                    />
                ))}
            </ul>
        </>
    );
};

export default TodoFeature;
