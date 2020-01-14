import React from 'react';
import styled from 'styled-components';
import { Recipe } from '../interfaces/Recipe';
import { spacing, breakpoints } from '../constants';
import { formatDuration } from '../time';
import ClockSvg from '../../static/img/clock.svg';
import ClockWaitSvg from '../../static/img/clock-wait.svg';
import ServingsSvg from '../../static/img/servings.svg';

interface CookingTimeAndServingsProps {
  recipe: Recipe;
}

export default function CookingTimeAndServings({
  recipe,
}: CookingTimeAndServingsProps) {
  return (
    <Metadata>
      <MetadataItem>
        <TimeIcon src={ClockSvg} alt="" />
        Tillagning:{' '}
        {formatDuration(
          0,
          recipe.cookingTime.active.hours,
          recipe.cookingTime.active.minutes
        )}
      </MetadataItem>
      <MetadataItem>
        <TimeIcon src={ClockWaitSvg} alt="" style={{ height: '1.4em' }} />
        Väntetid:{' '}
        {formatDuration(
          recipe.cookingTime.waiting.days,
          recipe.cookingTime.waiting.hours,
          recipe.cookingTime.waiting.minutes
        )}
      </MetadataItem>
      <MetadataItem>
        <TimeIcon src={ServingsSvg} alt="" />
        {recipe.servings} {recipe.servingsUnit}
      </MetadataItem>
    </Metadata>
  );
}

const MetadataItem = styled('div')`
  display: flex;
  justify-content: flex-start;
`;

const Metadata = styled('section')`
  display: grid;
  grid-gap: ${spacing.half};
  grid-template-columns: auto;
  margin-bottom: ${spacing.section};

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: auto auto auto;
  }

  img:not(:first-child) {
    margin-left: ${spacing.default};
  }
`;

const TimeIcon = styled('img')`
  height: 1.5em;
  margin-right: ${spacing.half};
`;
