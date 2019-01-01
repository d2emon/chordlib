import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import counter from './counter';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import alphabet from './alphabet';
import artists from './artists';

export default combineReducers({
    counter,
    todos,
    visibilityFilter,
    alphabet,
    artists,
    form,
});
