import React from 'react';
import styled from 'styled-components';
import {
  spacing,
  colors,
  breakpoints,
  categoryLinks,
  Theme,
} from '../constants';
import { tailwindColors } from '../tailwind-colors';
import { Link, graphql, useStaticQuery } from 'gatsby';
import LazyImage, { FancyImage } from './LazyImage';
import { transparentizeHex } from '../color-convertions';

export default function Categories() {
  const data = useStaticQuery(categoryImagesQuery);

  return (
    <CategoriesStyled>
      <CategoriesList>
        {categoryLinks.map(category => (
          <Category key={category.title}>
            <CategoryLink to={category.url}>
              <LazyImage
                image={getImageFrom(data, category.thumbnail)}
                imgStyle={{ transition: 'all 150ms ease' }}
              />
              <LinkTitle className="link-title" theme={category.thumbTheme}>
                {category.title}
              </LinkTitle>
            </CategoryLink>
          </Category>
        ))}
      </CategoriesList>
    </CategoriesStyled>
  );
}

function getImageFrom(data: any, name: string): FancyImage {
  return data.allFile.edges.find(x => x.node.name === name).node;
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

const LinkTitle = styled('div')`
  transform: translateY(-100%);
  position: absolute;
  width: 100%;
  padding: ${spacing.default};
  color: ${({ theme }) =>
    theme === Theme.light ? colors.white : colors.black};
  background-color: ${({ theme }) =>
    transparentizeHex(
      theme === Theme.light ? colors.black : colors.white,
      0.7
    )};

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: transparent;
    color: ${({ theme }) =>
      theme === Theme.light ? colors.black : colors.white};
  }
`;

const CategoryLink = styled(Link)`
  display: block;
  width: 100%;
  position: relative;
  transition: filter 150ms ease, box-shadow 150ms ease, font-size 150ms ease;
  box-shadow: 0 0 5px ${transparentizeHex(colors.black, 0.5)};

  .link-title {
    transition: font-size 100ms ease;
  }

  &:hover,
  &:focus {
    filter: brightness(1.1);
    box-shadow: 0 0 10px ${transparentizeHex(colors.black, 0.4)};

    picture img {
      transform: scale(1.05);
    }
    .link-title {
      font-size: 1.1em;
    }
  }

  &:active {
    box-shadow: 0 0 3px ${transparentizeHex(colors.black, 0.6)};
  }
`;

const Category = styled('li')`
  margin: 0;
  text-align: center;
`;

const CategoriesList = styled('ol')`
  display: grid;
  grid-gap: ${spacing.default};
  width: 100%;
  list-style: none;
  margin: 0;

  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(2, auto);
  }

  @media (min-width: ${breakpoints.small}) {
    grid-gap: ${spacing.double};
  }

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(3, auto);
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(6, auto);
    grid-gap: ${spacing.x3};
  }
`;

const CategoriesStyled = styled('section')`
  display: flex;
  justify-content: center;
  padding: ${spacing.default};
  background-color: ${tailwindColors.pink100};

  @media (min-width: ${breakpoints.small}) {
    padding: ${spacing.double};
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: ${spacing.x3};
  }
`;
