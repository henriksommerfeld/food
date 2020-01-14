import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing, layout } from '../constants';
import { tailwindColors } from '../tailwind-colors';
import AddSvg from '../../static/img/add.svg';
import SubSvg from '../../static/img/subtract.svg';
import IngredientsGroupComponent from './IngredientsGroupComponent';
import { Recipe } from '../interfaces/Recipe';

interface IngredientsProps {
  recipe: Recipe;
}

export default function IngredientsComponent({ recipe }: IngredientsProps) {
  const [servings, setServings] = useState<number>(recipe.servings);

  const showIngredientsHeading =
    recipe.ingredients?.ingredientsGroup?.length > 1;

  function decreaseServings() {
    if (servings < 2) return;
    setServings(x => --x);
  }

  function increaseServings() {
    setServings(x => ++x);
  }

  return (
    <IngredientsStyled>
      <h2>Ingredienser</h2>
      <ServingsAdjuster>
        <ServingsAdjusterButton onClick={decreaseServings}>
          <img
            src={SubSvg}
            alt={`Minska antalet ${recipe.servingsUnit} för beräkning av ingredienser`}
          />
        </ServingsAdjusterButton>
        {servings} {recipe.servingsUnit}
        <ServingsAdjusterButton onClick={increaseServings}>
          <img
            src={AddSvg}
            alt={`Öka antalet ${recipe.servingsUnit} för beräkning av ingredienser`}
          />
        </ServingsAdjusterButton>
      </ServingsAdjuster>
      {servings !== recipe.servings && (
        <ServingsAdjusterInfo>
          Justeringen av antal påverkar bara mängden ingredienser som visas i
          receptet. Tillagningstid och <em>Gör så här</em> är skrivna utifrån
          den ursprungliga mängden.
        </ServingsAdjusterInfo>
      )}
      {recipe.ingredients.ingredientsGroup.map((group, index) => (
        <IngredientsGroupComponent
          key={index}
          group={group}
          defaultServings={recipe.servings}
          servings={servings}
          shouldShowHeading={showIngredientsHeading}
        />
      ))}
    </IngredientsStyled>
  );
}

const ServingsAdjuster = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.default};
  border: 1px solid ${tailwindColors.teal500};
  background-color: ${tailwindColors.teal100};
  border-radius: 25px;
  padding: ${spacing.half};
`;

const ServingsAdjusterButton = styled('button')`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  cursor: pointer;
`;

const ServingsAdjusterInfo = styled('div')`
  padding: ${spacing.default};
  margin-bottom: ${spacing.default};
  background-color: ${tailwindColors.teal100};
  border: 1px solid ${tailwindColors.teal500};
  border-radius: ${layout.borderRadius};
`;

const IngredientsStyled = styled('section')`
  margin-bottom: ${spacing.section};
`;
