exports.removeRecipeFromUrl = url => {
  const recipeFragment = '/recept/';
  if (!url || !url.includes(recipeFragment)) return url;

  const urlParts = url.split(recipeFragment);
  return urlParts.length < 2 ? url : `/${urlParts[1]}`;
};

exports.editRecipeUrlFromAbsolutePath = absolutePath => {
  if (!absolutePath) return '';

  const pathParts = absolutePath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const path = fileName.substring(0, fileName.lastIndexOf('.'));

  const recipeEditBasePath = '/admin/#/collections/recept/entries';

  return `${recipeEditBasePath}/${path}`;
};

exports.editPageUrl = slug => {
  if (!slug) return '';

  const baseUrl = '/admin/#/collections/pages/entries';
  return `${baseUrl}/${slug}`;
};
