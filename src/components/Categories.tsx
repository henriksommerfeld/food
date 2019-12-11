import React from 'react';
import styled from 'styled-components';
import { spacing, navLinks, colors, breakpoints } from '../constants';
import { tailwindColors } from '../tailwind-colors';
import { Link, graphql, useStaticQuery } from 'gatsby';
import LazyImage, { FancyImage } from './LazyImage';
import { getResized, getFluid } from '../images';
import { transparentizeHex } from '../color-convertions';

export default function Categories() {
  const data = useStaticQuery(breakfastImageQuery);
  const breakfastImage = getImageFrom(data);

  return (
    <CategoriesStyled>
      <CategoriesList>
        {navLinks.map(category => (
          <Category key={category.title}>
            <CategoryLink to={category.url}>
              <LazyImage image={breakfastImage} />
              <LinkTitle>{category.title}</LinkTitle>
            </CategoryLink>
          </Category>
        ))}
      </CategoriesList>
    </CategoriesStyled>
  );
}

function getImageFrom(data: any): FancyImage {
  return data?.fileName || null;
}

const breakfastImageQuery = graphql`
  query {
    fileName: file(relativePath: { eq: "hidden/breakfast_1x1.jpg" }) {
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
`;

const LinkTitle = styled('div')`
  background-color: ${transparentizeHex(colors.white, 0.7)};
  backdrop-filter: blur(5px);
  color: ${colors.black};
  transform: translateY(-100%);
  position: absolute;
  width: 100%;
  padding: ${spacing.default};
`;

const CategoryLink = styled(Link)`
  display: block;
  width: 100%;
  position: relative;
`;

const Category = styled('li')`
  margin: 0;
  text-align: center;
  border: 2px dashed green;
`;

const CategoriesList = styled('ol')`
  display: grid;
  grid-gap: ${spacing.default};
  width: 100%;
  list-style: none;
  margin: 0;
  border: 2px dashed blue;

  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(2, auto);
  }

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(3, auto);
    grid-gap: ${spacing.double};
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
  background-color: ${tailwindColors.green200};

  @media (min-width: ${breakpoints.medium}) {
    padding: ${spacing.double};
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: ${spacing.x3};
  }
`;
