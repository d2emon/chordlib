// import { VisibilityFilters } from '../actions'

// export default (state = VisibilityFilters.SHOW_ALL, action) => {
export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}
