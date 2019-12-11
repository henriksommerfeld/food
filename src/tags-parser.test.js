const { getUniqueTags } = require('./tags-parser');

describe('getUniqueTags', () => {
  it('should return empty array for null', () => {
    expect(getUniqueTags(null)).toEqual([]);
  });

  it('should return empty array for undefined', () => {
    expect(getUniqueTags()).toEqual([]);
  });

  it('should return empty array for empty string values', () => {
    expect(getUniqueTags(['', ''])).toEqual([]);
  });

  it('should return distinct values', () => {
    const duplicates = ['tag 1', 'tag 2', 'tag 1'];
    const expected = ['tag 1', 'tag 2'];
    expect(getUniqueTags(duplicates)).toEqual(expected);
  });

  it('should return array for single value', () => {
    expect(getUniqueTags('Tag 1')).toEqual(['Tag 1']);
  });
});
