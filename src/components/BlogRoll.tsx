import React, { ReactElement, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import {
  MarkdownRemarkConnection,
  MarkdownRemarkEdge,
} from '../../auto-generated/graphql';
import BlogRollItem from './BlogRollItem';
import { colors, spacing, breakpoints, layout } from '../constants';
import MorePostsButton from './MorePostsButton';

interface BlogRoll {
  allMarkdownRemark: MarkdownRemarkConnection;
}

export default function BlogRoll(): ReactElement {
  const sesstionStorageKey = 'blogroll';
  const postsPerPage = 5;

  const data = useStaticQuery<BlogRoll>(blogRollQuery);
  const { edges: posts } = data && data.allMarkdownRemark;
  const postsToShowCount = getPostsToShowCount(posts);
  const [postsShown, setPostsShown] = useState(postsToShowCount);

  if (!posts) return null;

  return (
    <BlogRollStyled className="blog-roll">
      {getPostsToShow().map(({ node: post }) => BlogRollItem(post))}

      {posts.length > postsShown ? (
        <MorePostsButton clickedHandler={loadMorePostsClicked} />
      ) : null}
    </BlogRollStyled>
  );

  function getPostsToShow(): MarkdownRemarkEdge[] {
    return posts.slice(0, postsShown);
  }

  function loadMorePostsClicked(): void {
    setTimeout(() => {
      const newPostCount = postsShown + postsPerPage;
      setPostsShown(newPostCount);
      sessionStorage.setItem(sesstionStorageKey, `${newPostCount}`);
    }, 150);
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

const BlogRollStyled = styled('div')`
  background-color: ${colors.white};

  @media (min-width: ${breakpoints.medium}) {
    transform: translateY(${spacing.contentOffset});
    border-radius: ${layout.borderRadius};
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
    padding: ${spacing.double};
  }
`;

const blogRollQuery = graphql`
  query BlogRollQuery {
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
