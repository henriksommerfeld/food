import React from 'react';
import Content from '../components/Content';
import styled from 'styled-components';
import { colors, spacing, breakpoints, layout } from '../constants';
import BlogPostTags from './blog-post-tags';
import Searchbox from '../components/Searchbox';
import { WindowLocation } from '@reach/router';
import { PageStyled } from '../components/PageStyled';
import { PostContainer } from '../components/PostContainer';
import { PostStyled } from '../components/PostStyled';

interface BlogPostTemplateProps {
  content: string;
  contentComponent: any;
  date: string;
  tags: string[] | undefined;
  title: string;
  location: WindowLocation;
  isPreview?: boolean;
}

export default function BlogPostTemplate({
  content,
  contentComponent,
  date,
  tags,
  title,
  location,
  isPreview = false,
}: BlogPostTemplateProps) {
  const PostContent = contentComponent || Content;
  const dateString = date ? `Publicerat ${date}` : '';

  return (
    <>
      <PageStyled>
        <IntroBanner>
          {!isPreview && <Searchbox location={location} />}
          <IntroBannerWidthConstrainer>
            <Heading>{title}</Heading>
            <PostDate>{dateString}</PostDate>
          </IntroBannerWidthConstrainer>
        </IntroBanner>
        <PostContainer>
          <PostStyled>
            <PostContent content={content} />
            <BlogPostTags tags={tags} />
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

const IntroBannerWidthConstrainer = styled('div')`
  max-width: ${layout.contentMaxWidth}px;
  text-align: center;
  padding: ${spacing.double} ${spacing.default};

  @media (min-width: ${breakpoints.medium}) {
    padding: ${spacing.introBannerExtra} ${spacing.double}
      ${spacing.postBannerExtra} ${spacing.double};
  }
`;

const IntroBanner = styled('div')`
  background: ${colors.headerBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: ${colors.white};
  line-height: 1.4em;
  word-break: break-word;

  @media (min-width: ${breakpoints.medium}) {
    transform: translateY(${spacing.postHeadingOffset});
  }
`;
