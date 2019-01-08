import pageService from '../services/page';

const requestPages = () => ({
  type: 'REQUEST_PAGES',
  pages: null,
});

const receivePages = pages => ({
  type: 'RECEIVE_PAGES',
  pages,
});

const requestPage = () => ({
  type: 'REQUEST_PAGE',
  page: null,
});

const receivePage = page => ({
  type: 'RECEIVE_PAGE',
  page,
});

export const getPagesList = () => (dispatch) => {
  dispatch(requestPages());
  return pageService
    .fetchPages()
    .then(response => response)
    .catch(error => console.error('An error occurred.', error))
    .then(response => dispatch(receivePages(response.pages)));
};

export const getPage = page => (dispatch) => {
  dispatch(requestPage());
  return pageService
    .fetchPage(page)
    .then(response => response)
    .catch(error => console.error('An error occurred.', error))
    .then(response => dispatch(receivePage(response.page)));
};
