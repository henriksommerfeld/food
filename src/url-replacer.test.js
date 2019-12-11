const {
  removeBlogFromUrl,
  editBlogUrlFromAbsolutePath,
} = require('./url-replacer');

describe('removeBlogFromUrl', () => {
  it('should remove /blog from url', () => {
    const input = '/blog/2019-08-21-youtube-test/';
    const expected = '/2019-08-21-youtube-test/';
    expect(removeBlogFromUrl(input)).toEqual(expected);
  });

  it('should return / for /', () => {
    expect(removeBlogFromUrl('/')).toEqual('/');
  });
});

it('editBlogUrlFromAbsolutePath should return url', () => {
  const input =
    'C:/git/isabel-blog/src/pages/blog/2011-03-31-svartlistade_i_belarus_kevin_spacey_amp_jude_law.md';
  const expected =
    '/admin/#/collections/blog/entries/2011-03-31-svartlistade_i_belarus_kevin_spacey_amp_jude_law';

  const result = editBlogUrlFromAbsolutePath(input);

  expect(result).toEqual(expected);
});
