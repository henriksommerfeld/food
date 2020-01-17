import React from 'react';
import styled from 'styled-components';
import { InstructionsGroup } from '../interfaces/Recipe';
import CheckableInstruction from './CheckableInstruction';

interface InstructionsGroupProps {
  group: InstructionsGroup;
  shouldShowHeading: boolean;
}

export default function InstructionsGroupComponent({
  group,
  shouldShowHeading = false,
}: InstructionsGroupProps) {
  if (!(group.instructions.length > 0)) return null;

  return (
    <>
      {shouldShowHeading && <h3>{group.name}</h3>}
      <ListStyled>
        {group.instructions.map((instruction, index) => (
          <CheckableInstruction key={index} instruction={instruction} />
        ))}
      </ListStyled>
    </>
  );
}

const ListStyled = styled('ol')`
  margin-left: 0;
`;
