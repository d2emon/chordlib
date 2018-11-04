import React from 'react';
import AddTodo from '../../containers/Todos/AddTodo';
import FilteredListTodo from '../../containers/Todos/FilteredListTodo';
import TodoFilterLinks from './TodoFilterLinks';

const Todos = () => (
    <div>
        <AddTodo />
        <FilteredListTodo />
        <TodoFilterLinks />
    </div>
);

export default Todos;
