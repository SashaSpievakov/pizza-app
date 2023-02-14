import modifySearchParamsName from './modifySearchParamsName';

describe('tests modifySearchParamsName', () => {
  test('works with the right parameters', () => {
    expect(modifySearchParamsName('category')).toBe('category&order=desc');
  });

  test('works with the A to Z parameter', () => {
    expect(modifySearchParamsName('A to Z')).toBe('name&order=asc');
  });

  test('works with an empty string', () => {
    expect(modifySearchParamsName('   ')).toBe('');
  });
});
