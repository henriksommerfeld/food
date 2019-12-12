import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, breakpoints, spacing, layout } from '../constants';
import { WindowLocation } from '@reach/router';
import { transparentizeHex } from '../color-convertions';
import { tailwindColors } from '../tailwind-colors';
import { SharedIntroBanner } from './shared-intro-banner';
import { FancyImage } from 'components/LazyImage';

interface CategoryTemplateProps {
  headerImageFile: FancyImage;
  heading: string;
  subheading: ReactNode;
  children: ReactNode;
  location: WindowLocation;
}

export function CategoryTemplate({
  headerImageFile,
  heading,
  subheading,
  children,
  location,
}: CategoryTemplateProps) {
  return (
    <Page>
      <SharedIntroBanner backgroundImage={headerImageFile} location={location}>
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

const ContentBox = styled('div')`
  font-size: 1.1em;
  border-radius: ${layout.borderRadius};
  max-width: ${layout.contentMaxWidth}px;

  ul {
    list-style: none;
    margin: 0;
  }

  @media (min-width: ${breakpoints.small}) {
    border: 1px solid ${tailwindColors.gray300};
    padding: 2rem;
    background: rgba(255, 255, 255, 0.7);

    h1,
    p {
      text-align: center;
    }
  }
`;

const Banner = styled('div')`
  display: flex;
  justify-content: center;
  background-color: ${colors.headerBackground};
`;

const Text = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  padding: ${spacing.double} ${spacing.default};
  background: ${transparentizeHex(colors.white, 0.7)};
  height: 100%;
  width: 100%;
  min-height: calc(100vh - 100px);

  @media (min-width: ${breakpoints.small}) {
    background: none;
    height: auto;
    min-height: initial;
  }
`;

const Page = styled('div')`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  padding-bottom: ${spacing.contentGapToFooter};
`;
