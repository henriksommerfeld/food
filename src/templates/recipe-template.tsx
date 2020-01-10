import React, { useState } from 'react';
import Content from '../components/Content';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../constants';
import RecipeTags from './recipe-tags';
import { WindowLocation } from '@reach/router';
import { PageStyled } from '../components/PageStyled';
import { PostContainer } from '../components/PostContainer';
import { PostStyled } from '../components/PostStyled';
import ClockSvg from '../../static/img/clock.svg';
import ClockWaitSvg from '../../static/img/clock-wait.svg';
import ServingsSvg from '../../static/img/servings.svg';
import RecipeBanner from '../components/RecipeBanner';
import {
  Recipe,
  Ingredient,
  IngredientsGroup,
  Ingredients,
  Instructions,
  InstructionsGroup,
  QuantityUnit,
} from '../interfaces/Recipe';
import Error from '../components/Error';
import LazyImage from '../components/LazyImage';
import { formatDuration } from '../time';
import {
  toFraction,
  getQuantity,
  formattedQuantity,
} from '../ingredients-calculations';

interface RecipeTemplateProps {
  recipie: Recipe;
  contentComponent: any;
  location: WindowLocation;
}

export default function RecipeTemplate({
  recipie,
  contentComponent,
  location,
}: RecipeTemplateProps) {
  const PostContent = contentComponent || Content;
  const [servings, setServings] = useState(recipie.servings);

  if (!recipie) return <Error />;

  const showIngredientsHeading = shouldShowIngredientsHeading(
    recipie.ingredients
  );
  const showInstructionsHeading = shouldShowInstructionsHeading(
    recipie.instructions
  );

  return (
    <>
      <PageStyled>
        <RecipeBanner location={location} category={recipie.category}>
          <IntroText>
            <h1>{recipie.title}</h1>
          </IntroText>
        </RecipeBanner>
        <PostContainer>
          <PostStyled>
            <Description>{recipie.description}</Description>
            <Metadata>
              <MetadataItem>
                <TimeIcon src={ClockSvg} alt="" />
                Tillagning:{' '}
                {formatDuration(
                  0,
                  recipie.cookingTime.active.hours,
                  recipie.cookingTime.active.minutes
                )}
              </MetadataItem>
              <MetadataItem>
                <TimeIcon
                  src={ClockWaitSvg}
                  alt=""
                  style={{ height: '1.4em' }}
                />
                Väntetid:{' '}
                {formatDuration(
                  recipie.cookingTime.waiting.days,
                  recipie.cookingTime.waiting.hours,
                  recipie.cookingTime.waiting.minutes
                )}
              </MetadataItem>
              <MetadataItem>
                <TimeIcon src={ServingsSvg} alt="" />
                <input
                  type="number"
                  min="1"
                  defaultValue={recipie.servings}
                  onChange={e => setServings(e.target.value)}
                  style={{ width: '3em' }}
                />{' '}
                {recipie.servingsUnit}
              </MetadataItem>
            </Metadata>
            <Columns>
              <IngredientsStyled>
                <h2>Ingredienser</h2>
                {recipie.ingredients.ingredientsGroup.map((group, index) => (
                  <IngredientsGroupComponent
                    key={index}
                    group={group}
                    defaultServings={recipie.servings}
                    servings={servings}
                    shouldShowHeading={showIngredientsHeading}
                  />
                ))}
              </IngredientsStyled>
              <div>
                <FeaturedImage image={recipie.featuredImage} />
              </div>
            </Columns>
            <InstructionsStyled>
              <h2>Gör så här:</h2>
              {recipie.instructions.instructionsGroup.map((group, index) => (
                <InstructionsGroupComponent
                  key={index}
                  group={group}
                  shouldShowHeading={showInstructionsHeading}
                />
              ))}
            </InstructionsStyled>

            <PostContent content={recipie.body} />
            <RecipeTags tags={recipie.tags} />
          </PostStyled>
        </PostContainer>
      </PageStyled>
    </>
  );
}

function shouldShowInstructionsHeading(instructions: Instructions): boolean {
  return instructions?.instructionsGroup?.length > 1;
}

function shouldShowIngredientsHeading(ingredients: Ingredients): boolean {
  return ingredients?.ingredientsGroup?.length > 1;
}

interface InstructionsGroupProps {
  group: InstructionsGroup;
  shouldShowHeading: boolean;
}

function InstructionsGroupComponent({
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

interface IngredientsGroupProps {
  group: IngredientsGroup;
  servings: number;
  defaultServings: number;
  shouldShowHeading: boolean;
}

function IngredientsGroupComponent({
  group,
  servings,
  defaultServings,
  shouldShowHeading = false,
}: IngredientsGroupProps) {
  if (!(group.ingredients.length > 0)) return null;

  return (
    <>
      {shouldShowHeading && <h3>{group.name}</h3>}
      <ul>
        {group.ingredients.map((ingredient, index) => (
          <IngredientComponent
            ingredient={ingredient}
            servings={servings}
            defaultServings={defaultServings}
            key={index}
          />
        ))}
      </ul>
    </>
  );
}

interface IngredientProps {
  ingredient: Ingredient;
  servings: number;
  defaultServings: number;
}

function IngredientComponent({
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
    <li>
      <QuantityStyled>{formattedQuantity(calculatedIngredient)}</QuantityStyled>
    </li>
  );
}

const QuantityStyled = styled('span')`
  /* font-family: 'Source Sans Pro';
  /* Need a font where one can see the difference between l and I */
  /* font-variant-numeric: diagonal-fractions; */
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric#numeric-fraction-values */
`;

function FeaturedImage({ image, title = null }) {
  if (!image) return null;

  const altText = title ? `Bild till receptet ${title}` : '';
  const marginBottom = { marginBottom: spacing.section };

  return (
    <div className="featured-thumbnail" style={marginBottom}>
      <LazyImage image={image} altText={altText} />
    </div>
  );
}

const Columns = styled('div')`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${breakpoints.small}) {
    display: grid;
    grid-gap: ${spacing.default};
    grid-template-columns: 1fr minmax(0, 1fr);
  }
`;

const TimeIcon = styled('img')`
  height: 1.5em;
  margin-right: ${spacing.half};
`;

const IngredientsStyled = styled('section')`
  margin-bottom: ${spacing.section};
`;

const InstructionsStyled = styled('section')`
  margin-bottom: ${spacing.section};
`;

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

const Description = styled('div')`
  margin-bottom: ${spacing.section};
`;

const IntroText = styled('div')`
  color: ${colors.white};
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${spacing.default};
  padding-right: ${spacing.default};
  text-align: center;
`;
