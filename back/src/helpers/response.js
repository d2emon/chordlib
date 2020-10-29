import debug from './debug';

export const successResponse = result => result;

export const errorResponse = (error) => {
  debug('error')(error);
  return {
    error: error.message,
  };
};
