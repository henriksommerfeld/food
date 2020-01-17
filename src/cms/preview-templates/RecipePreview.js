import React from 'react';
import RecipeTemplate from '../../templates/recipe-template';
import { toIngredients, toInstructions } from '../../recipe-mappers';

const RecipePreview = ({ entry, widgetFor }) => {
  const dataRaw = entry.getIn(['data']);
  const data = (dataRaw && dataRaw.toJS()) || {};

  const recipe = {
    title: data.title,
    description: data.description,
    featuredImage: data.featuredimage,
    servings: data.servings,
    servingsUnit: data.servingslabel,
    tags: data.tags,
    body: widgetFor('body'),
    cookingTime: {
      active: {
        hours: data.timeactive.hoursactive,
        minutes: data.timeactive.minutesactive,
      },
      waiting: {
        days: data.timepassive.dayspassive,
        hours: data.timepassive.hourspassive,
        minutes: data.timepassive.minutespassive,
      },
    },
    ingredients: toIngredients(data.ingredients),
    instructions: toInstructions(data.instructions),
  };

  return <RecipeTemplate recipe={recipe} />;
};

export default RecipePreview;
