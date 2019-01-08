const initialState = {
  errors: {},

  pages: null,
  pagesLoaded: false,

  page: null,
  pageLoaded: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PAGES':
      return {
        ...state,
        pagesLoaded: false,
        pages: null,
      };
    case 'RECEIVE_PAGES':
      return {
        ...state,
        pagesLoaded: true,
        pages: action.pages,
      };
    case 'REQUEST_PAGE':
      return {
        ...state,
        pageLoaded: false,
        page: null,
      };
    case 'RECEIVE_PAGE':
      return {
        ...state,
        pageLoaded: true,
        page: action.page,
      };
    default:
      return state;
  }
};
