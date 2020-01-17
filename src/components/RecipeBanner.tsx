import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { WindowLocation } from '@reach/router';
import { SharedIntroBanner } from '../templates/shared-intro-banner';
import { FancyImage, RecipeImage } from './LazyImage';
import { categoryBanners } from '../constants';

interface RecipeBannerProps {
  location: WindowLocation;
  category: string;
  image?: RecipeImage;
  searchIndex: any;
  children: ReactNode;
}

export default function RecipeBanner({
  location,
  category,
  image,
  searchIndex,
  children,
}: RecipeBannerProps) {
  // const data = useStaticQuery(bannerImagesQuery);
  //const imageName = categoryBanners.find(x => x.title === category).imageName;
  //const backgroundImage = getImageFrom(data, imageName);

  return (
    <SharedIntroBanner
      backgroundImage={image}
      overlayOpacity={0.6}
      location={location}
      searchIndex={searchIndex}
    >
      {children}
    </SharedIntroBanner>
  );
}

// function getImageFrom(data: any, name: string): FancyImage {
//   return data.allFile.edges.find(x => x.node.name === name).node;
// }

// const bannerImagesQuery = graphql`
//   query {
//     allFile(
//       filter: {
//         relativePath: {
//           in: [
//             "hidden/breakfast-hero.jpg"
//             "hidden/starter-hero.jpg"
//             "hidden/dessert-hero.jpg"
//             "hidden/main-hero.jpg"
//             "hidden/baking-hero.jpg"
//             "hidden/salad-hero.jpg"
//           ]
//         }
//       }
//     ) {
//       edges {
//         node {
//           name
//           childImageSharp {
//             fluid(maxWidth: 5000) {
//               src
//               srcSet
//               aspectRatio
//               sizes
//               base64
//             }
//           }
//         }
//       }
//     }
//   }
// `;
