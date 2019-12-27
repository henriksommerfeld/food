import React from 'react';
import Content from '../components/Content';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../constants';
import RecipeTags from './recipe-tags';
import { WindowLocation } from '@reach/router';
import { PageStyled } from '../components/PageStyled';
import { PostContainer } from '../components/PostContainer';
import { PostStyled } from '../components/PostStyled';
import { SharedIntroBanner } from './shared-intro-banner';

interface RecipeTemplateProps {
  content: string;
  contentComponent: any;
  date: string;
  tags: string[] | undefined;
  title: string;
  location: WindowLocation;
  isPreview?: boolean;
}

export default function RecipeTemplate({
  content,
  contentComponent,
  date,
  tags,
  title,
  location,
}: RecipeTemplateProps) {
  const PostContent = contentComponent || Content;
  const dateString = date ? `Publicerat ${date}` : '';

  return (
    <>
      <PageStyled>
        <SharedIntroBanner location={location}>
          <IntroText>
            <h1>{title}</h1>
            {/* TODO: Minska textstorleken i mobil */}
          </IntroText>
        </SharedIntroBanner>
        <PostContainer>
          <PostStyled>
            <ol>
              <li>Description</li>
              <li>Image (if not default image)</li>
              <li>Cooking time</li>
              <li>Portions</li>
              <li>Ingredients</li>
              <li>Instructions</li>
              <li>Final text in markdown and possible embedded images</li>
            </ol>
            <PostContent content={content} />
            <RecipeTags tags={tags} />
          </PostStyled>
        </PostContainer>
      </PageStyled>
    </>
  );
}

const PostDate = styled('div')`
  color: ${colors.postDate};

  @media (min-width: ${breakpoints.medium}) {
    transform: translateY(${spacing.postHeadingOffset});
  }
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
