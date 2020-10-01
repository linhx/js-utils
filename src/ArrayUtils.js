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
  return array.includes(value) !== -1;
};

export const length = (array) => isArray(array) ? array.length : 0;

/**
 * To get index of an element in an array
 * @param {Array} array the array
 * @param {Function|} compare the compare function or the value to be check
 */
export const index = function (array, compare) {
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

/**
 * Get the first element of an array
 * @param {Array} array the array
 * @returns the first element of the array, if the array's length equals 0, return undefined
 */
export const first = function (array) {
  if (length(array)) {
    return array[0];
  } else {
    return undefined;
  }
};

/**
 * Get the last element of an array
 * @param {Array} array the array
 * @returns the last element of the array, if the array's length equals 0, return undefined
 */
export const last = function (array) {
  if (length(array)) {
    return array[array.length - 1];
  } else {
    return undefined;
  }
};

/**
 * To merge two or more arrays
 * @param  {...any} args the Arrays and/or values to concatenate into a new array
 */
export const concat = (...args) => Array.prototype.concat.apply([], args);
