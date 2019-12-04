// vim: set ts=2 sw=2 et tw=80:


const BODY_METHODS = ['PUT', 'POST', 'PATCH'];
const NON_BODY_METHODS = ['GET', 'OPTIONS', 'HEAD', 'DELETE'];
const METHODS = BODY_METHODS + NON_BODY_METHODS;

/**
 * @function doFetchRequest
 * @param {String} method The method of the Fetch request. One of: 'GET',
 * 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'
 * @param {String} url The url of the API to call, optionally with parameters.
 * @param {Object} headers The Associative Array containing the Request Headers.
 * It must be undefined if there are no headers.
 * @param {String} body The body String to be sent to the server. It must be
 * undefined if there is no body.
 * @returns {Promise} which receives the HTTP response.
 */
function doFetchRequest(method, url, headers, body) {
  if (METHODS.indexOf(method) == -1) {
    throw new Error(`${method} is not a method`);
    return;
  }

  if (BODY_METHODS.indexOf(method) != -1 && typeof body != 'string') {
    throw new Error(`body must be a string with ${BODY_METHODS}`);
    return;
  } else if (NON_BODY_METHODS.indexOf(method) != -1 && body !== undefined) {
    throw new Error(`body must be undefined with ${NON_BODY_METHODS}`);
    return;
  }

  return fetch(url, {
    method: method,
    headers: headers,
    body: body
  });
}


/** @function doJSONRequest
 * @param {String} method The method of the Fetch request. One of: 'GET',
 * 'POST', 'PUT', 'DELETE'.
 * @param {String} url The url of the API to call, optionally with parameters.
 * @param {Object} headers The Associative Array containing the Request Headers.
 * It must be undefined if there are no headers.
 * @param {Object} data The object to be sent as JSON body to the server.
 * It must be undefined if there is no body.
 * @returns {Promise} which receives directly the object parsed from the
 * response JSON.
 */
 function doJSONRequest(method, url, headers, data){
  const JSON_MIME = 'application/json';

  headers = Object.assign({}, headers);

  if (('Content-Type' in headers && headers['Content-Type'] !== JSON_MIME) ||
      ('Accept' in headers && headers['Accept'] !== JSON_MIME)) {
    throw new Error(`headers object contains Content-Type or Accept`);
    return;
  }

  headers['Accept'] = JSON_MIME;

  if (NON_BODY_METHODS.indexOf(method) != -1 && data !== undefined) {
    throw new Error(`data must be undefined with ${NON_BODY_METHODS}`);
    return;
  } else if (BODY_METHODS.indexOf(method) != -1) {
    if (typeof data != 'object' || data === null) {
      throw new Error(`data must be a non-null object with ${BODY_METHODS}`);
      return;
    }

    try {
      data = JSON.stringify(data);
    } catch (e) {
      throw new Error('data cannot be converted into JSON: ' + e);
      return;
    }

    headers['Content-Type'] = JSON_MIME;
  }

  return doFetchRequest(method, url, headers, data)
    .then(res => res.status == 204 ? {} : res.json());
}

// export {doFetchRequest};
