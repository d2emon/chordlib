import pageService from '../services/page';
import markdown from '../helpers/markdown';

const injectHtml = (page) => {
  const getHtml = text => markdown
    .render(text)
    .replace('{:subculture:}', '');

  if (!page) return null;
  const { text } = page;
  if (!text) return page;
  return {
    ...page,
    html: getHtml(text),
  };
};

const requestPages = () => ({
  type: 'REQUEST_PAGES',
});

const receivePages = pages => ({
  type: 'RECEIVE_PAGES',
  pages,
});

const requestPage = () => ({
  type: 'REQUEST_PAGE',
});

const receivePage = page => ({
  type: 'RECEIVE_PAGE',
  page,
});

const receiveError = error => ({
  type: 'RECEIVE_ERROR',
  error,
});

export const getPagesList = () => (dispatch) => {
  dispatch(requestPages());
  return pageService
    .fetchPages()
    .then(response => dispatch(receivePages(response.pages)))
    .catch(error => dispatch(receiveError(error)));
};

export const getPage = page => (dispatch) => {
  dispatch(requestPage());
  return pageService
    .fetchPage(page)
    // .then(logResponse('Page'))
    .then(injectHtml)
    // .then(logResponse('With html'))
    .then(response => dispatch(receivePage(response)))
    .catch(error => dispatch(receiveError(error)));
};
