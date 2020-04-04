import React, { ReactElement, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import {
  MarkdownRemarkConnection,
  MarkdownRemarkEdge,
} from '../../auto-generated/graphql';
import RecipeRollItem from './RecipeRollItem';
import { colors, spacing, breakpoints, layout } from '../constants';

interface RecipeRoll {
  allMarkdownRemark: MarkdownRemarkConnection;
}

export default function RecipeRoll(): ReactElement {
  const sesstionStorageKey = 'reciperoll';
  const postsPerPage = 5;

  const data = useStaticQuery<RecipeRoll>(recipeRollQuery);
  const { edges: posts } = data && data.allMarkdownRemark;
  const postsToShowCount = getPostsToShowCount(posts);
  const [postsShown] = useState(postsToShowCount);

  if (!posts) return null;

  return (
    <RecipeRollStyled className="recipe-roll">
      {getPostsToShow().map(({ node: post }) => RecipeRollItem(post))}
    </RecipeRollStyled>
  );

  function getPostsToShow(): MarkdownRemarkEdge[] {
    return posts.slice(0, postsShown);
  }

  function getPreviousCount(): number {
    const count = getFromSessionStorage(sesstionStorageKey);
    return parseInt(count) || 0;
  }

  function getFromSessionStorage(key: string): string {
    if (typeof sessionStorage === 'undefined') return '';
    return sessionStorage.getItem(key);
  }

  function getPostsToShowCount(posts: MarkdownRemarkEdge[]): number {
    if (!posts || posts.length < 1) return 0;

    const previousPosition = getPreviousCount();
    return previousPosition > postsPerPage ? previousPosition : postsPerPage;
  }
}

const RecipeRollStyled = styled('div')`
  background-color: ${colors.white};

  @media (min-width: ${breakpoints.medium}) {
    transform: translateY(${spacing.contentOffset});
    border-radius: ${layout.borderRadius};
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
    padding: ${spacing.double};
  }
`;

const recipeRollQuery = graphql`
  query RecipeRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { templateKey: { eq: "recept" }, hidden: { ne: true } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM, YYYY", locale: "sv")
          }
        }
      }
    }
  }
`;
