import React, { useState } from 'react';
import styled from 'styled-components';
import { InstructionsGroup } from '../interfaces/Recipe';
import { tailwindColors } from '../tailwind-colors';
import { spacing, colors } from '../constants';
import { transparentizeHex } from '../color-convertions';

interface CheckableInstructionProps {
  instruction: string;
}

export default function CheckableInstruction({
  instruction,
}: CheckableInstructionProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ListItemStyled checked={isChecked}>
      <label>
        <HiddenInput
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(x => !x)}
        />
        <Checkbox checked={isChecked}></Checkbox>
      </label>
      {instruction}
    </ListItemStyled>
  );
}

const ListItemStyled = styled('li')`
  display: flex;
  align-items: top;
  padding: 0;
  margin-bottom: ${spacing.default};
  color: ${({ checked }) => (checked ? tailwindColors.gray400 : colors.black)};
  transition: color 200ms ease-in-out;
`;

const HiddenInput = styled('input')`
  display: none;
`;

const Checkbox = styled('span')`
  --boxShadowColor: ${({ checked }) =>
    checked
      ? transparentizeHex(tailwindColors.teal500, 0.2)
      : transparentizeHex(tailwindColors.gray400, 0.3)};
  display: flex;
  position: relative;
  cursor: pointer;
  height: 1.4em;
  width: 1.4em;
  border-radius: 100%;
  margin-right: ${spacing.half};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ checked }) =>
    checked ? tailwindColors.teal500 : tailwindColors.gray500};
  transition: all 400ms ease-in-out;
  background-color: ${({ checked }) =>
    checked ? tailwindColors.teal100 : colors.white};
  box-shadow: 0 2px 2px var(--boxShadowColor);

  &::before {
    content: '';
    top: 5px;
    left: 4px;
    height: 0.5em;
    width: 0.8em;
    position: absolute;
    border-width: 0.15em;
    border-style: solid;
    border-color: ${({ checked }) =>
      checked ? tailwindColors.teal600 : 'transparent'};
    border-right: 0;
    border-top: 0;
    transform: rotate(-50deg);
    transition: border-color 200ms ease-in-out;
  }
`;
