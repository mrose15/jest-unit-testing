const {
  flattenArr,
  dataFetcher,
  sortList,
  formatCurrency,
  handlePromises
} = require('./helpers.js');
const axios = require('axios');

jest.mock('axios');

describe('flattenArr', () => {
  it('flattens a nested array', () => {
    const input = [1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]];
    expect(flattenArr(input)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(flattenArr(input)).toHaveLength(11);
  });

  it('flattens a non-nested array', () => {
    const input = [1, 2, 3, 4, 5];
    expect(flattenArr(input)).toEqual([1, 2, 3, 4, 5]);
  });
});
