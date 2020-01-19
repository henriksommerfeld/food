import React from 'react';
import styled from 'styled-components';
import { Ingredient } from '../interfaces/Recipe';
import { getQuantity, formattedQuantity } from '../ingredients-calculations';

interface IngredientProps {
  ingredient: Ingredient;
  servings: number;
  defaultServings: number;
}

export default function IngredientComponent({
  ingredient,
  servings,
  defaultServings,
}: IngredientProps) {
  const calculatedIngredient = getQuantity(
    ingredient,
    defaultServings,
    servings
  );
  return (
    <ListItemStyled>
      <QuantityStyled>{formattedQuantity(calculatedIngredient)}</QuantityStyled>
    </ListItemStyled>
  );
}

const ListItemStyled = styled('li')``;

const QuantityStyled = styled('span')`
  /* font-family: 'Source Sans Pro';
  /* TODO: Need a font where one can see the difference between l and I */
  /* font-variant-numeric: diagonal-fractions; */
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric#numeric-fraction-values */
`;
