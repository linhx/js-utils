/**
 * Determine if an element is an HTML Element
 * @param {any} el the element to be check
 * @returns true of the value of `el` is an HTMLElement
 */
export const isElement = el => Boolean(el && el.nodeType === Node.ELEMENT_NODE);

/**
 * Select a single element, returns `null` if not found
 * @param {String} selector the selector
 * @param {HTMLElement} root the element use to find
 * @returns the element have been found
 */
export const select = (selector, root) => (isElement(root) ? root : document).querySelector(selector) || null;
