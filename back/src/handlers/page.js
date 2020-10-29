import Page from '../models/page';
import {
  errorResponse,
  successResponse,
} from '../helpers/response';

const getStatus = error => ((error.code === 'ENOENT') ? 404 : 500);

export const listPages = (req, res) => Page
  .all()
  .then(pages => res.json(successResponse({ pages })))
  .catch(error => res.status(getStatus(error)).json(errorResponse(error)));

export const getPage = (req, res) => {
  const filename = req.params.filename || req.query.filename;
  return Page
    .find(filename)
    .then(page => res.json(successResponse({ page })))
    .then(response => res.json(response))
    .catch(error => res.status(getStatus(error)).json(errorResponse(error)));
};
