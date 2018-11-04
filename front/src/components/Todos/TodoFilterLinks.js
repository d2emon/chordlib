import React from 'react';
import TodoFilter from '../../containers/Todos/TodoFilter';
import { VisibilityFilters } from "../../actions/todosActions";

const TodoFilterLinks = () => (
    <div>
        <span>Show: </span>
        <TodoFilter filter={VisibilityFilters.SHOW_ALL}>
            All
        </TodoFilter>
        <TodoFilter filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </TodoFilter>
        <TodoFilter filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </TodoFilter>
    </div>
);

export default TodoFilterLinks;
