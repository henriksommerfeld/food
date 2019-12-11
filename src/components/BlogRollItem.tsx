import React from 'react';
import { Link } from 'gatsby';
import LazyImage from './LazyImage';
import { MarkdownRemark } from '../../auto-generated/graphql';
import styled from 'styled-components';
import { fonts, colors, spacing } from '../constants';

export default function BlogRollItem(post: MarkdownRemark) {
  if (!post || !post.frontmatter) return null;

  const frontmatter = post.frontmatter;
  const title = frontmatter.title || '';
  const featuredImage = frontmatter.featuredimage;
  const slug = (post.fields && post.fields.slug) || '';
  const date = post.frontmatter.date;
  const dateString = date ? `Publicerat ${date}` : '';

  return (
    <Article key={post.id} role="article">
      <Header>
        <HeadingLink to={slug}>{title}</HeadingLink>
        <Date>{dateString}</Date>
      </Header>
      <div>
        <p>{post.excerpt}</p>
        <FeaturedImage title={title} image={featuredImage} />
        <ReadMoreWrapper>
          <ReadMoreLink to={slug} aria-label={`Läs hela artikeln ${title}`}>
            Läs vidare →
          </ReadMoreLink>
        </ReadMoreWrapper>
      </div>
    </Article>
  );
}

const HeadingLink = styled(Link)`
  &,
  &:visited {
    color: ${colors.black};
    font-family: ${fonts.headingFamily};
    font-size: 1.7rem;
    transition: color ease-in-out 150ms;
  }
  &:hover,
  &:active,
  &:focus {
    color: ${colors.linkFocus};
    background: none;
  }
`;

const Date = styled('div')`
  text-align: center;
  color: ${colors.postDateRoll};
  font-size: 0.8em;
`;

const Article = styled('article')`
  padding: ${spacing.default};
  border-bottom: 1px dashed gray;
`;

const Header = styled('header')`
  text-align: center;
  margin-bottom: 2rem;
`;

const ReadMoreWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

const ReadMoreLink = styled(Link)``;

function FeaturedImage({ image, title }) {
  if (!image) return null;

  const altText = title ? `Bild till artikeln ${title}` : '';
  const marginBottom = { marginBottom: spacing.default };

  return (
    <div className="featured-thumbnail" style={marginBottom}>
      <LazyImage image={image} altText={altText} />
    </div>
  );
}
