import { tailwindColors } from './tailwind-colors';
import { css } from 'styled-components';

export const spacing = {
  default: '1rem',
  double: '2rem',
  x3: '3rem',
  half: '0.5rem',
  introBannerExtra: '3rem',
  postBannerExtra: '5rem',
  notFoundBannerExtra: '5rem',
  contentOffset: `-3rem`,
  postHeadingOffset: `-1rem`,
  postHeadingOffsetWithSearchbox: `-2rem`,
  contentGapToFooter: '5rem',
};

export const zIndexes = {
  searchBox: 1,
  mobileMenu: 2,
  headerNav: 3,
};

export const layout = {
  contentMaxWidth: 1000,
  borderRadius: '0.25rem',
};

export const urls = {
  siteBaseUrl: 'https://recept.netlify.com.com',
  twitterBaseUrl: 'https://twitter.com',
};

export const breakpoints = {
  xs: '550px',
  small: '768px',
  medium: '1024px',
  desktop: '1024px',
  large: '1400px',
  xl: '2048px',
};

export const colors = {
  white: tailwindColors.white,
  black: tailwindColors.black,
  pageBackground: tailwindColors.gray100,
  headerBackground: tailwindColors.gray800,
  footerBackground: tailwindColors.gray900,
  mobileMenuIconOpen: tailwindColors.gray400,
  mobileMenuBackgroundHover: tailwindColors.gray200,
  mobileMenuTextHover: tailwindColors.red700,
  link: tailwindColors.red600,
  linkVisited: tailwindColors.red600,
  linkFocus: tailwindColors.red700,
  postDate: tailwindColors.gray500,
  postDateRoll: tailwindColors.gray700,
  buttonBackground: tailwindColors.red600,
  buttonHover: tailwindColors.red700,
  buttonActive: tailwindColors.red800,
  lighterTextForWhiteBackground: tailwindColors.gray700,
  selectionBackground: tailwindColors.red700,
  facebook: '#3C5A99',
  linkedIn: '#0077B5',
  twitter: '#1DA1F2',
};

export const fonts = {
  headingFamily: `'Domine', 'serif'`,
  bodyFamily: `'Open Sans', 'sans-serif'`,
};

export const links = {
  linkedin: {
    url: 'https://www.linkedin.com/in/isabelsommerfeld',
    title: 'LinkedIn',
  },
  tags: {
    url: '/taggar',
    title: 'Se alla taggar',
  },
};

export const imageBorderStyle = {
  margin: 0,
  padding: '4px',
  boxShadow: 'rgba(34,25,25,0.4) 0 1px 3px !important',
  backgroundColor: '#fff',
};

export const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: ${colors.buttonBackground};
  background-size: 0;
  transition: background-color 100ms ease-in-out;
  color: ${colors.white};
  border-style: none;
  cursor: pointer;

  &:visited {
    color: ${colors.white};
  }

  &:hover {
    background-color: ${colors.buttonHover};
    background-size: 0;
    color: ${colors.white};
  }
  &:active,
  &:focus {
    background-color: ${colors.buttonActive};
    background-size: 0;
    color: ${colors.white};
  }
`;
