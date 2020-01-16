import React from 'react';
import styled from 'styled-components';
import { IngredientsGroup } from '../interfaces/Recipe';
import IngredientComponent from './IngredientComponent';

interface IngredientsGroupProps {
  group: IngredientsGroup;
  servings: number;
  defaultServings: number;
  shouldShowHeading: boolean;
}

export default function IngredientsGroupComponent({
  group,
  servings,
  defaultServings,
  shouldShowHeading = false,
}: IngredientsGroupProps) {
  if (!(group.ingredients.length > 0)) return null;

  return (
    <>
      {shouldShowHeading && <h3>{group.name}</h3>}
      <IngredientsListStyled>
        {group.ingredients.map((ingredient, index) => (
          <IngredientComponent
            ingredient={ingredient}
            servings={servings}
            defaultServings={defaultServings}
            key={index}
          />
        ))}
      </IngredientsListStyled>
    </>
  );
}

const IngredientsListStyled = styled('ul')`
  margin-left: 0;
`;
