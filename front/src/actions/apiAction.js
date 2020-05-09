export default (api, request, resolve, reject) => (dispatch) => {
  dispatch(request())
  return api()
    .then(response => dispatch(resolve(response)))
    .catch(error => dispatch(reject(error)));
}
