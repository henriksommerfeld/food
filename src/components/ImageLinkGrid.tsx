import styled from 'styled-components';
import { spacing, colors, breakpoints, Theme } from '../constants';
import { tailwindColors } from '../tailwind-colors';
import { Link } from 'gatsby';
import { transparentizeHex } from '../color-convertions';

const time = '150ms';
const easing = 'ease';
export const imageTransition = {
  transition: `all ${time} ${easing}`,
};

export const LinkTitle = styled('div')`
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

export const ItemLinkStyled = styled(Link)`
  display: block;
  width: 100%;
  position: relative;
  transition: ${`filter ${time} ${easing}, box-shadow ${time} ${easing}, font-size ${time} ${easing}`};
  box-shadow: 0 0 5px ${transparentizeHex(colors.black, 0.5)};

  .link-title {
    transition: font-size 100ms ease;
  }

  &:hover,
  &:focus {
    filter: brightness(1.1);
    box-shadow: 0 4px 10px ${transparentizeHex(colors.black, 0.4)};

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

export const Item = styled('li')`
  margin: 0;
  text-align: center;
`;

export const GridItemsList = styled('ol')`
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

export const GridContainerStyled = styled('section')`
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
