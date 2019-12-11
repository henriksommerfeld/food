exports.removeBlogFromUrl = url => {
  const blogFragment = '/blog/';
  if (!url || !url.includes(blogFragment)) return url;

  const urlParts = url.split(blogFragment);
  return urlParts.length < 2 ? url : `/${urlParts[1]}`;
};

exports.editBlogUrlFromAbsolutePath = absolutePath => {
  if (!absolutePath) return '';

  const pathParts = absolutePath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const path = fileName.substring(0, fileName.lastIndexOf('.'));

  const blogEditBasePath = '/admin/#/collections/blog/entries';

  return `${blogEditBasePath}/${path}`;
};

exports.editPageUrl = slug => {
  if (!slug) return '';

  const baseUrl = '/admin/#/collections/pages/entries';
  return `${baseUrl}/${slug}`;
};
