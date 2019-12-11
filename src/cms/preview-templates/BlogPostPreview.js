import React from 'react';
import BlogPostTemplate from '../../templates/blog-post-template';

const BlogPostPreview = ({ entry, widgetFor }) => {
  const date = entry.getIn(['data', 'date']) || new Date();
  const tagsRaw = entry.getIn(['data', 'tags']);

  const tags = (tagsRaw && tagsRaw.toJS()) || [];
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('sv', options);

  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      date={formattedDate}
      tags={tags}
      title={entry.getIn(['data', 'title'])}
      isPreview={true}
    />
  );
};

export default BlogPostPreview;
