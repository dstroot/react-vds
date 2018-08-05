export const logResult = result => {
  console.log(result);
};

export const logError = error => {
  console.log('Error: \n', error);
};

// Handle HTTP errors since fetch doesn't... :(
// https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
export const validateResponse = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    if (response.status >= 200 && response.status < 300) {
      return response.body;
    } else {
      throw Error(`Request rejected with status ${response.status}`);
    }
  }
};

export const readResponseAsJSON = response => {
  return response.json();
};

export const readResponseAsText = response => {
  return response.text();
};

export default {
  logResult,
  logError,
  validateResponse,
  readResponseAsJSON,
  readResponseAsText,
};
