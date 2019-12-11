import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints, spacing, layout } from '../constants';
import BlogRoll from '../components/BlogRoll';
import { WindowLocation } from '@reach/router';
import { PageStyled } from '../components/PageStyled';
import { SharedIntroBanner } from './shared-intro-banner';
import { FancyImage } from '../components/LazyImage';
import Categories from '../components/Categories';

interface IndexPageTemplateProps {
  headerImageFile: FancyImage;
  heading: string;
  subheading: string;
  description: string;
  isPreview?: boolean;
  location: WindowLocation;
}

export const IndexPageTemplate = ({
  headerImageFile,
  heading,
  subheading,
  isPreview = false,
  location,
}: IndexPageTemplateProps) => (
  <PageStyled>
    <SharedIntroBanner
      backgroundImage={headerImageFile}
      overlayOpacity={0.4}
      location={location}
    >
      <IntroText>
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
      </IntroText>
    </SharedIntroBanner>
    <Categories />
    {/* <BlogRollContainer>{isPreview ? null : <BlogRoll />}</BlogRollContainer> */}
  </PageStyled>
);

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

const BlogRollContainer = styled('div')`
  width: '100%';
  margin: 0 auto;

  @media (min-width: ${breakpoints.medium}) {
    max-width: ${layout.contentMaxWidth}px;
  }
`;
