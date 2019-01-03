import { connect } from 'react-redux';
import TodoList from '../../components/Todos/TodoList';
import {toggleTodo, VisibilityFilters} from "../../actions/todosActions";

const filterTodos = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + visibilityFilter);
    }
};

const mapStateToProps = state => ({
    todos: filterTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

