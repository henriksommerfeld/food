import React from 'react';
import { InstructionsGroup } from '../interfaces/Recipe';

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
      <ol>
        {group.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </>
  );
}
