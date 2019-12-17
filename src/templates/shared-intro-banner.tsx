import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, breakpoints, layout } from '../constants';
import BackgroundImage from 'gatsby-background-image';
import { getFluid } from '../images';
import Searchbox from '../components/Searchbox';
import { WindowLocation } from '@reach/router';
import { BlogImage } from '../components/LazyImage';

interface SharedIntroBannerProps {
  backgroundImage: BlogImage;
  overlayOpacity?: number;
  location: WindowLocation;
  children: ReactNode;
}

export function SharedIntroBanner({
  backgroundImage,
  overlayOpacity = 0.3,
  location,
  children,
}: SharedIntroBannerProps) {
  return (
    <IntroBanner
      backgroundImage={backgroundImage}
      overlayOpacity={overlayOpacity}
    >
      <IntroBannerWidthConstrainer>
        {children}
        <Searchbox location={location} />
      </IntroBannerWidthConstrainer>
    </IntroBanner>
  );
}

function IntroBanner({ backgroundImage, overlayOpacity, children }) {
  const fluidImage = getFluid(backgroundImage);

  if (!fluidImage) {
    return <IntroBannerSolidBackground>{children}</IntroBannerSolidBackground>;
  }

  return (
    <IntroBannerWithFluidImage
      fluid={fluidImage}
      backgroundColor={colors.black}
    >
      <IntroBannerDarkOverlay opacity={overlayOpacity}>
        {children}
      </IntroBannerDarkOverlay>
    </IntroBannerWithFluidImage>
  );
}

const IntroBannerSolidBackground = styled('div')`
  background-color: ${colors.headerBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IntroBannerDarkOverlay = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  background-color: rgba(0, 0, 0, ${({ opacity }) => opacity});
  width: 100%;
  height: 100%;
`;

export const bannerMinHeight = '14rem';
export const bannerMinHeightMedium = '18rem';
const IntroBannerWithFluidImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  min-height: ${bannerMinHeight};

  @media (min-width: ${breakpoints.medium}) {
    min-height: ${bannerMinHeightMedium};
  }
`;

const IntroBannerWidthConstrainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  min-height: ${bannerMinHeight};
  max-width: ${layout.contentMaxWidth}px;

  @media (min-width: ${breakpoints.medium}) {
    min-height: ${bannerMinHeightMedium};
    justify-content: center;
  }
`;
