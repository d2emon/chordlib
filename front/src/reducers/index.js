import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import counter from '../modules/counter/reducers';
import todos from '../modules/todos/reducers/todos';
import visibilityFilter from '../modules/todos/reducers/visibilityFilter';
import artists from './artists';
import alphabet from '../modules/alphabet/reducers';

export default combineReducers({
    counter,
    todos,
    visibilityFilter,
    alphabet,
    artists,
    form,
});
