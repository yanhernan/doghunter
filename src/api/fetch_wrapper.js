export const request = async (
  uri,
  options = {method: 'GET', body: undefined},
) => {
  // TODO: implementation interceptor to authetification future
  return await fetch(uri, options);
};

export const postRequest = (uri, payload, options = {}) => {
  return request(uri, {...options, method: 'POST', body: payload});
};

export const getRequest = (uri, options = {}) => {
  return request(uri, {...options});
};

export const putRequest = (uri, payload, options = {}) => {
  return request(uri, {...options, method: 'PUT', body: payload});
};

export const deleteRequest = (uri, payload = undefined, options) => {
  return request(uri, {...options, method: 'DELETE', body: payload});
};

export default {
  post: postRequest,
  get: getRequest,
  put: putRequest,
  delete: deleteRequest,
};
