const {
  removeRecipeFromUrl,
  editRecipeUrlFromAbsolutePath,
} = require('./url-replacer');

describe('removeRecipeFromUrl', () => {
  it('should remove /recept from url', () => {
    const input = '/recept/apple-pie/';
    const expected = '/apple-pie/';
    expect(removeRecipeFromUrl(input)).toEqual(expected);
  });

  it('should return / for /', () => {
    expect(removeRecipeFromUrl('/')).toEqual('/');
  });
});

it('editRecipeUrlFromAbsolutePath should return url', () => {
  const input = 'C:/git/food/src/pages/recept/pancakes.md';
  const expected = '/admin/#/collections/recept/entries/pancakes';

  const result = editRecipeUrlFromAbsolutePath(input);

  expect(result).toEqual(expected);
});
