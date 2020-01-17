import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../constants';
import { WindowLocation } from '@reach/router';
import { SharedIntroBanner } from './shared-intro-banner';
import { FancyImage } from 'components/LazyImage';

interface CategoryTemplateProps {
  headerImageFile: FancyImage;
  heading: string;
  subheading: ReactNode;
  children: ReactNode;
  location: WindowLocation;
  searchIndex: any;
}

export function CategoryTemplate({
  headerImageFile,
  heading,
  subheading,
  children,
  location,
  searchIndex,
}: CategoryTemplateProps) {
  return (
    <Page>
      <SharedIntroBanner
        backgroundImage={headerImageFile}
        location={location}
        searchIndex={searchIndex}
      >
        <IntroText>
          <h1>{heading}</h1>
          <h2>{subheading}</h2>
        </IntroText>
      </SharedIntroBanner>
      {children}
    </Page>
  );
}

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

const Page = styled('div')`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  padding-bottom: ${spacing.contentGapToFooter};
`;
