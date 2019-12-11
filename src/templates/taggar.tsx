import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { TagPageQuery } from '../../auto-generated/graphql';
import { TagsTemplate } from './tags-template';
import TagSvg from '../../static/img/tag-grey500.svg';
import BlogPostSvg from '../../static/img/blog-post-grey500.svg';
import { links } from '../constants';
import { WindowLocation } from '@reach/router';

interface TagRouteProps {
  data: TagPageQuery;
  pageContext: {
    tag: string;
  };
  location: WindowLocation;
}

export default function TagRoute({
  data,
  pageContext,
  location,
}: TagRouteProps) {
  const posts = data.allMarkdownRemark.edges;
  const postLinks = posts.map(post => (
    <LinkContainer key={post.node.fields.slug}>
      <LinkIconSvg src={BlogPostSvg} alt="" />
      <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
    </LinkContainer>
  ));
  const tag = pageContext.tag;
  const totalCount = data.allMarkdownRemark.totalCount;
  const tagHeader = getHeader(tag, totalCount);

  return (
    <Layout location={location} editLink="" pageTitle={tag}>
      <TagsTemplate location={location}>
        <h1>{tag}</h1>
        <p>{tagHeader}</p>
        <ul>{postLinks}</ul>
        <br />
        <SeAllTagsLinkContainer>
          <LinkIconSvg src={TagSvg} alt="" />
          <Link to={links.tags.url}>{links.tags.title}</Link>
        </SeAllTagsLinkContainer>
      </TagsTemplate>
    </Layout>
  );
}

function getHeader(tag: string, count: number) {
  return (
    <>
      {count} inlägg tagg{count === 1 ? 'at' : 'de'} med <q>{tag}</q>
    </>
  );
}

const LinkIconSvg = styled('img')`
  margin: 0 0.5em 0 0;
  min-width: 1rem;
`;

const LinkContainer = styled('li')`
  display: flex;
  align-items: center;
`;

const SeAllTagsLinkContainer = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
