import React from 'react';
import { categoryLinks } from '../constants';
import { graphql, useStaticQuery } from 'gatsby';
import LazyImage, { FancyImage } from './LazyImage';
import {
  GridContainerStyled,
  GridItemsList,
  Item,
  ItemLinkStyled,
  LinkTitle,
  imageTransition,
} from './ImageLinkGrid';

export default function Categories() {
  const data = useStaticQuery(categoryImagesQuery);

  return (
    <GridContainerStyled>
      <GridItemsList>
        {categoryLinks.map((category) => (
          <Item key={category.title}>
            <ItemLinkStyled to={category.url}>
              <LazyImage
                image={getImageFrom(data, category.thumbnail)}
                imgStyle={imageTransition}
                // aspectRatio={1}
              />
              <LinkTitle className="link-title" theme={category.thumbTheme}>
                {category.title}
              </LinkTitle>
            </ItemLinkStyled>
          </Item>
        ))}
      </GridItemsList>
    </GridContainerStyled>
  );
}

function getImageFrom(data: any, name: string): FancyImage {
  return data.allFile.edges.find((x) => x.node.name === name).node;
}

const categoryImagesQuery = graphql`
  query {
    allFile(
      filter: {
        relativePath: {
          in: [
            "hidden/breakfast_1x1.jpg"
            "hidden/starter_1x1.jpg"
            "hidden/dessert_1x1.jpg"
            "hidden/main_1x1.jpg"
            "hidden/baking_1x1.jpg"
            "hidden/salad_1x1.jpg"
          ]
        }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 600) {
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
