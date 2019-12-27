import React from 'react';
import RecipeTemplate from '../../templates/recipe-template';

const RecipePreview = ({ entry, widgetFor }) => {
  const date = entry.getIn(['data', 'date']) || new Date();
  const tagsRaw = entry.getIn(['data', 'tags']);

  const tags = (tagsRaw && tagsRaw.toJS()) || [];
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('sv', options);

  return (
    <RecipeTemplate
      content={widgetFor('body')}
      date={formattedDate}
      tags={tags}
      title={entry.getIn(['data', 'title'])}
      isPreview={true}
    />
  );
};

export default RecipePreview;
