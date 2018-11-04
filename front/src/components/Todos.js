import React from 'react';
import AddTodo from '../containers/AddTodo';
import FilteredListTodo from '../containers/FilteredListTodo';
import TodoFilterLinks from './TodoFilterLinks';

const Todos = props => (
    <div>
        <AddTodo />
        <FilteredListTodo />
        <TodoFilterLinks />
    </div>
);

export default Todos;
