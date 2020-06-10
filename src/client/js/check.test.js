import {checkForURL} from './check'
test('validate Content', () => {
    expect(checkForURL('https://www.yahoo.com')).toBe(true);
    expect(checkForURL('abcxyz')).toBe(false);
  });