const initialState = {
  pages: null,
  page: null,
  error: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PAGES':
      return {
        ...state,
        pages: null,
        error: null,
      };
    case 'RECEIVE_PAGES':
      return {
        ...state,
        pages: action.pages,
        error: null,
      };
    case 'REQUEST_PAGE':
      return {
        ...state,
        page: null,
        error: null,
      };
    case 'RECEIVE_PAGE':
      return {
        ...state,
        page: action.page,
        error: null,
      };
    case 'RECEIVE_ERROR':
      return {
        ...state,
        page: null,
        error: action.error.toString(),
      };
    default:
      return state;
  }
};
