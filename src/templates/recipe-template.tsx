import React from 'react';
import Content from '../components/Content';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../constants';
import RecipeTags from './recipe-tags';
import { WindowLocation } from '@reach/router';
import { PageStyled } from '../components/PageStyled';
import { PostContainer } from '../components/PostContainer';
import { PostStyled } from '../components/PostStyled';
import RecipeBanner from '../components/RecipeBanner';
import { Recipe } from '../interfaces/Recipe';
import Error from '../components/Error';
import LazyImage from '../components/LazyImage';
import CookingTimeAndServings from '../components/CookingTimeAndServings';
import IngredientsComponent from '../components/IngredientsComponent';
import InstructionsComponent from '../components/InstructionsComponent';

interface RecipeTemplateProps {
  recipe: Recipe;
  contentComponent: any;
  location: WindowLocation;
}

export default function RecipeTemplate({
  recipe,
  contentComponent,
  location,
}: RecipeTemplateProps) {
  const PostContent = contentComponent || Content;

  if (!recipe) return <Error />;

  return (
    <PageStyled>
      <RecipeBanner
        location={location}
        category={recipe.category}
        image={recipe.featuredImage}
      >
        <IntroText>
          <h1>{recipe.title}</h1>
        </IntroText>
      </RecipeBanner>
      <PostContainer>
        <PostStyled>
          <Description>{recipe.description}</Description>
          <CookingTimeAndServings recipe={recipe} />
          <Columns>
            <IngredientsComponent recipe={recipe} />
            <div>
              <InstructionsComponent recipe={recipe} />
              <FeaturedImage image={recipe.featuredImage} />
              <PostContent content={recipe.body} />
            </div>
          </Columns>

          <RecipeTags tags={recipe.tags} />
        </PostStyled>
      </PostContainer>
    </PageStyled>
  );
}

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
  display: grid;

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: 1fr minmax(0, 2fr);
    grid-gap: ${spacing.x3};
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
