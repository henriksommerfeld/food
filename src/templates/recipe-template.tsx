import React, { ReactElement } from 'react';
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
} from '../interfaces/Recipe';
import Error from '../components/Error';
import LazyImage from '../components/LazyImage';

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
            {/* TODO: Minska textstorleken i mobil */}
          </IntroText>
        </RecipeBanner>
        <PostContainer>
          <PostStyled>
            <Description>{recipie.description}</Description>
            <Metadata>
              <MetadataItem>
                <TimeIcon src={ClockSvg} alt="" />
                Tillagning:{' '}
                {recipie.cookingTime.active.hours > 0
                  ? `${recipie.cookingTime.active.hours} tim`
                  : ''}{' '}
                {recipie.cookingTime.active.minutes} min
              </MetadataItem>
              <MetadataItem>
                <TimeIcon
                  src={ClockWaitSvg}
                  alt=""
                  style={{ height: '1.4em' }}
                />
                Väntetid: 1 timme
              </MetadataItem>
              <MetadataItem>
                <TimeIcon src={ServingsSvg} alt="" />
                30 bullar 🥯
              </MetadataItem>
            </Metadata>
            <FeaturedImage image={recipie.featuredImage} />
            <IngredientsStyled>
              <h2>Du behöver:</h2>
              {recipie.ingredients.ingredientsGroup.map(group => (
                <IngredientsGroupComponent
                  group={group}
                  shouldShowHeading={showIngredientsHeading}
                />
              ))}
            </IngredientsStyled>
            <InstructionsStyled>
              <h2>Gör så här:</h2>
              {recipie.instructions.instructionsGroup.map(group => (
                <InstructionsGroupComponent
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
        {group.instructions.map(instruction => (
          <li>{instruction}</li>
        ))}
      </ol>
    </>
  );
}

interface IngredientsGroupProps {
  group: IngredientsGroup;
  shouldShowHeading: boolean;
}

function IngredientsGroupComponent({
  group,
  shouldShowHeading = false,
}: IngredientsGroupProps) {
  if (!(group.ingredients.length > 0)) return null;

  return (
    <>
      {shouldShowHeading && <h3>{group.name}</h3>}
      <ul>
        {group.ingredients.map(ingredient => (
          <IngredientComponent ingredient={ingredient} />
        ))}
      </ul>
    </>
  );
}

interface IngredientProps {
  ingredient: Ingredient;
}

function IngredientComponent({ ingredient }: IngredientProps) {
  if (ingredient.quantity < 1) return <li>{ingredient.name}</li>;

  return (
    <li>
      {ingredient.quantity} {ingredient.unit} {ingredient.name}
    </li>
  );
}

function FeaturedImage({ image, title = null }) {
  if (!image) return null;

  const altText = title ? `Bild till receptet ${title}` : '';
  const marginBottom = { marginBottom: spacing.default };

  return (
    <div className="featured-thumbnail" style={marginBottom}>
      <LazyImage image={image} altText={altText} />
    </div>
  );
}

const TimeIcon = styled('img')`
  height: 1.5em;
  margin-right: ${spacing.half};
`;

const IngredientsStyled = styled('section')``;

const InstructionsStyled = styled('section')``;

const MetadataItem = styled('div')`
  display: flex;
  justify-content: flex-start;
`;

const Metadata = styled('section')`
  display: grid;
  grid-gap: ${spacing.half};
  grid-template-columns: auto;
  margin-bottom: ${spacing.default};

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: auto auto auto;
  }

  img:not(:first-child) {
    margin-left: ${spacing.default};
  }
`;

const Description = styled('div')`
  margin-bottom: ${spacing.default};
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
