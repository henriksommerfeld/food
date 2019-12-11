const yaml = require('js-yaml');

module.exports.transformerRemarkParser = str => {
  const result = yaml.safeLoad(str);

  let toReturn = removeFeaturedImage(result);
  toReturn = removeImage(toReturn);
  toReturn = removeEmptyTags(toReturn);

  return toReturn;
};

function removeFeaturedImage(fields) {
  const hasProperty = Object.prototype.hasOwnProperty.call(
    fields,
    'featuredimage'
  );
  if (!hasProperty) return fields;
  const { featuredimage, ...otherFields } = fields;
  return featuredimage ? fields : otherFields;
}

function removeImage(fields) {
  const hasProperty = Object.prototype.hasOwnProperty.call(fields, 'image');
  if (!hasProperty) return fields;
  const { image, ...otherFields } = fields;
  return image ? fields : otherFields;
}

function removeEmptyTags(fields) {
  const hasProperty = Object.prototype.hasOwnProperty.call(fields, 'tags');
  if (!hasProperty) return fields;
  const { tags, ...otherFields } = fields;
  const nonEmptyTags = tags.filter(t => t);
  return { ...otherFields, tags: nonEmptyTags };
}
