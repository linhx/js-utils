/**
 * To check is array or not
 * @param {any} array The value to be checked
 * @returns true if the value is an Array; otherwise, false.
 */
export const isArray = (array) => Array.isArray(array);

/**
 * Check an array includes a certain value
 * @param {Array} array the array
 * @param {any} value the value
 * @returns true if the value is found within the array
 */
export const includes = function (array, value) {
  if (!isArray(array)) return false;
  return array.includes(value);
};

export const length = (array) => (isArray(array) ? array.length : 0);

/**
 * To get index of an element in an array
 * @param {Array} array the array
 * @param {Function|T} compare the compare function or the value to be check
 */
export const index = function <T>(
  array: T[],
  compare: (item: T) => boolean | T
) {
  if (!length(array)) return undefined;

  for (let i = 0; i < array.length; i++) {
    if (typeof compare === 'function') {
      if (compare(array[i])) return i;
    } else {
      if (array[i] === compare) return i;
    }
  }
  return undefined;
};
