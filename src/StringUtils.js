import { isString } from "./ObjectUtils";

/**
 * genarate a uuid
 * @returns the string uuid
 */
export const UUID = function () {
  const cryptoObj = window.crypto || window.msCrypto; // for IE 11
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ cryptoObj.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
};
/**
 * count the character in the string
 * @param {String} str the string
 * @param {*} char the character
 */
export const charCount = function (str, char) {
  let count = 0;
  if (isString(str) && isString(char) && char.length === 1) {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) count++;
    }
  }
  return count;
};
/**
 * get index of character at the Nth occurrence
 * @param {String} str the string
 * @param {Char} char the character
 * @param {*} n the Nth occurrence
 */
export const index = function (str, char, n) {
  let count = 0;
  if (isString(str) && isString(char) && char.length === 1) {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) count++;
      if (count === n) return i;
    }
  }
  return -1;
};

/**
 * Join paths, no need to care about that path start/end with slash character or not
 * e.g. path[0] = "path0"; path[1] = "path1" => result = path0/path1
 *      path[0] = "path0/"; path[1] = "/path1" => result = path0/path1
 * @param  {...String} paths the paths
 * @returns the joined url
 */
export const joinUrl = function (...paths) {
  if (!paths || !paths.length) return null;

  for (let i = 0; i < paths.length; i++) {
    if (!paths[i]) continue;
    if (i === 0) {
      // check the first path
      paths[i] = paths[i].replace(/\/+$/g, '');
    } else if (i === paths.length - 1) {
      // check the last path
      paths[i] = paths[i].replace(/^\/+/g, '');
    } else {
      paths[i] = paths[i].replace(/^\/+|\/+$/g, '');
    }
  }
  const _paths = paths.filter(e => e);
  return _paths.join('/');
};
