import pageService from '../services/page';
import markdown from '../helpers/markdown';
import renderSubcultures from '../helpers/subcultures';
import apiAction from './apiAction';

const getHtml = text => markdown
  .render(text || '')
  .replace('{{subcultures}}', renderSubcultures());

const injectHtml = (page) => {
  if (!page) return null;
  const { text } = page;
  if (!text) return page;
  console.log('INJECT HTML', page, text);
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

const requestText = () => ({
  type: 'REQUEST_TEXT',
});

const receiveText = text => ({
  type: 'RECEIVE_TEXT',
  html: getHtml(text || ''),
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
    .fetchPageData(page)
    .then(injectHtml),
  requestPage,
  receivePage,
  receiveError,
);

export const getPageText = page => apiAction(
  () => pageService.fetchPage(page),
  requestText,
  receiveText,
  receiveError,
);

export const getArtistPage = (artist, page) => apiAction(
  () => pageService
    .fetchArtistPageData(artist, page)
    .then(injectHtml),
  requestPage,
  receivePage,
  receiveError,
);

export const getArtistPageText = (artist, page) => apiAction(
  () => pageService.fetchArtistPage(artist, page),
  requestText,
  receiveText,
  receiveError,
);
