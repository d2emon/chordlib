import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(item => (
            <TodoItem
                key={item.id}
                {...item}
                onClick={() => toggleTodo(item.id)}
            />
        ))}
    </ul>
);

export default TodoList;
