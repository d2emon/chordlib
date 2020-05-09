import pageService from '../services/page';
import markdown from '../helpers/markdown';
import renderSubcultures from '../helpers/subcultures';
import apiAction from './apiAction';

const injectHtml = (page) => {
  const getHtml = text => markdown
    .render(text)
    .replace('{{subcultures}}', renderSubcultures());

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

export const getPagesList = () => apiAction(
  pageService.fetchPages,
  requestPages,
  receivePages,
  receiveError,
);

export const getPage = page => apiAction(
  () => pageService
    .fetchPage(page)
    // .then(logResponse('Page'))
    .then(injectHtml),
  requestPage,
  receivePage,
  receiveError,
);

export const getArtistPage = (artist, page) => apiAction(
  () => pageService
    .fetchArtistPage(artist, page)
    .then(injectHtml),
  requestPage,
  receivePage,
  receiveError,
);
