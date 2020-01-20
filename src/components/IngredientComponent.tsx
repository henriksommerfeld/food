import React from 'react';
import styled from 'styled-components';
import { Ingredient } from '../interfaces/Recipe';
import { getQuantity, formattedQuantity } from '../ingredients-calculations';
import { spacing } from '../constants';
import { tailwindColors } from '../tailwind-colors';

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
    <ListItemStyled>{formattedQuantity(calculatedIngredient)}</ListItemStyled>
  );
}

const ListItemStyled = styled('li')`
  align-items: baseline;

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${tailwindColors.teal400};
    border-radius: 100%;
    margin-right: ${spacing.half};
  }
`;
