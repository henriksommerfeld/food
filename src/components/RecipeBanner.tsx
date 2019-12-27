import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { WindowLocation } from '@reach/router';
import { SharedIntroBanner } from '../templates/shared-intro-banner';
import { FancyImage } from './LazyImage';
import { categoryBanners } from '../constants';

interface RecipeBannerProps {
  location: WindowLocation;
  category: string;
  children: ReactNode;
}

export default function RecipeBanner({
  location,
  category,
  children,
}: RecipeBannerProps) {
  const data = useStaticQuery(bannerImagesQuery);
  const imageName = categoryBanners.find(x => x.title === category).imageName;
  const backgroundImage = getImageFrom(data, imageName);

  return (
    <SharedIntroBanner
      backgroundImage={backgroundImage}
      overlayOpacity={0.6}
      location={location}
    >
      {children}
    </SharedIntroBanner>
  );
}

function getImageFrom(data: any, name: string): FancyImage {
  return data.allFile.edges.find(x => x.node.name === name).node;
}

const bannerImagesQuery = graphql`
  query {
    allFile(
      filter: {
        relativePath: {
          in: [
            "hidden/breakfast-hero.jpg"
            "hidden/starter-hero.jpg"
            "hidden/dessert-hero.jpg"
            "hidden/main-hero.jpg"
            "hidden/baking-hero.jpg"
            "hidden/salad-hero.jpg"
          ]
        }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 5000) {
              src
              srcSet
              aspectRatio
              sizes
              base64
            }
          }
        }
      }
    }
  }
`;
