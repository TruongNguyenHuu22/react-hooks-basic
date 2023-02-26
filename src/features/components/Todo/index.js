import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

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

    const handleFormSubmit = (formValues) => {
        const newTodo = {
            id: todoList.length + 1,
            ...formValues,
        };

        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    };

    return (
        <div className="section-box">
            <h3>UseState - Todo List</h3>
            <h5>Description:</h5>
            <ul>
                <li> Show todo list. </li>
                <li>Click one of todo, that todo will be removed. </li>
                <li>Add todo into todo list</li>
            </ul>

            <h6>Technique: Use useState</h6>
            <TodoForm onSubmit={handleFormSubmit} />
            <TodoList {...{ todoList }} onClickTodo={handleRemoveTodo} />
        </div>
    );
};

export default TodoFeature;
