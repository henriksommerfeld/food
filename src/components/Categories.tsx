import React from 'react';
import styled from 'styled-components';
import { spacing, colors, breakpoints } from '../constants';
import { tailwindColors } from '../tailwind-colors';
import { Link, graphql, useStaticQuery } from 'gatsby';
import LazyImage, { FancyImage } from './LazyImage';
import { transparentizeHex } from '../color-convertions';

export default function Categories() {
  const data = useStaticQuery(breakfastImageQuery);

  return (
    <CategoriesStyled>
      <CategoriesList>
        {navLinks.map(category => (
          <Category key={category.title}>
            <CategoryLink to={category.url}>
              <LazyImage
                image={getImageFrom(data, category.thumbnail)}
                imgStyle={{ transition: 'all 150ms ease' }}
              />
              <LinkTitle className="link-title">{category.title}</LinkTitle>
            </CategoryLink>
          </Category>
        ))}
      </CategoriesList>
    </CategoriesStyled>
  );
}

interface NavLink {
  url: string;
  title: string;
  thumbnail: string;
}

const navLinks: NavLink[] = [
  { url: '/frukost', title: 'Frukost', thumbnail: 'breakfast_1x1' },
  { url: '/forratter', title: 'Förrätter', thumbnail: 'starter_1x1' },
  { url: '/huvudratter', title: 'Huvudrätter', thumbnail: 'breakfast_1x1' },
  { url: '/sallader', title: 'Sallader', thumbnail: 'breakfast_1x1' },
  { url: '/efterratter', title: 'Efterrätter', thumbnail: 'breakfast_1x1' },
  { url: '/bakning', title: 'Bakning', thumbnail: 'breakfast_1x1' },
];

function getImageFrom(data: any, name: string): FancyImage {
  return data.allFile.edges.find(x => x.node.name === name).node;
}

const breakfastImageQuery = graphql`
  query {
    allFile(
      filter: {
        relativePath: {
          in: ["hidden/breakfast_1x1.jpg", "hidden/starter_1x1.jpg"]
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
  transition: filter 150ms ease;

  .link-title {
    transition: font-size 100ms ease;
  }

  &:hover,
  &:focus {
    filter: brightness(1.1);

    picture img {
      transform: scale(1.05);
    }
    .link-title {
      font-size: 1.1em;
    }
  }
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
