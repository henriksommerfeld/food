import React from 'react';
import styled from 'styled-components';
import { spacing } from '../constants';
import { RecipeProps } from '../interfaces/Recipe';
import InstructionsGroupComponent from './InstructionsGroupComponent';

export default function InstructionsComponent({ recipe }: RecipeProps) {
  const instructionsCount = recipe.instructions?.instructionsGroup?.length || 0;
  const showHeading = instructionsCount > 1;

  if (instructionsCount < 1) return null;

  return (
    <InstructionsStyled>
      <h2>Gör så här</h2>
      {recipe.instructions.instructionsGroup.map((group, index) => (
        <InstructionsGroupComponent
          key={index}
          group={group}
          shouldShowHeading={showHeading}
        />
      ))}
    </InstructionsStyled>
  );
}

const InstructionsStyled = styled('section')`
  margin-bottom: ${spacing.section};
`;
