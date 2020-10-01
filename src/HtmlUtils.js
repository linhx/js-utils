const stripTagsRegex = /(<([^>]+)>)/gi;

/**
 * Removes any thing that looks like an HTML tag from the supplied string
 * @param {String} text the text
 * @returns String without html tag
 */
export const stripTags = (text = '') => String(text).replace(stripTagsRegex, '');
