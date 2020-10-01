import {
  charCount,
} from '../src/StringUtils';

test('count the character in the string', () => {
  expect(charCount('test', 't')).toBe(2);
  expect(charCount('test', 'x')).toBe(0);
  expect(charCount('test', 'e')).toBe(1);

  expect(charCount()).toBe(0);
  expect(charCount('')).toBe(0);
  expect(charCount('', '')).toBe(0);
  expect(charCount('test', '')).toBe(0);
});
