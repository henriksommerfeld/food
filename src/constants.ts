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
  section: '3rem',
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
  headerBackground: tailwindColors.teal700,
  footerBackground: tailwindColors.teal900,
  link: tailwindColors.teal600,
  linkVisited: tailwindColors.teal600,
  linkFocus: tailwindColors.teal700,
  postDate: tailwindColors.teal200,
  postDateRoll: tailwindColors.gray700,
  buttonBackground: tailwindColors.red600,
  buttonHover: tailwindColors.red700,
  buttonActive: tailwindColors.red800,
  lighterTextForWhiteBackground: tailwindColors.gray700,
  selectionBackground: tailwindColors.teal700,
};

export const fonts = {
  headingFamily: `'Domine', 'serif'`,
  bodyFamily: `'Open Sans', 'sans-serif'`,
};

export const links = {
  tags: {
    url: '/taggar',
    title: 'Se alla taggar',
  },
};

export enum Theme {
  light = 1,
  dark = 2,
}

export interface CategoryBanner {
  title: string;
  imageName: string;
}

export const categoryBanners: CategoryBanner[] = [
  {
    title: 'Frukost',
    imageName: 'breakfast-hero',
  },
  {
    title: 'Förrätt',
    imageName: 'dessert-hero',
  },
  {
    title: 'Huvudrätt',
    imageName: 'main-hero',
  },
  {
    title: 'Efterrätt',
    imageName: 'dessert-hero',
  },
  {
    title: 'Bakning',
    imageName: 'baking-hero',
  },
];

export interface NavLink {
  url: string;
  title: string;
  imagePath: string;
  thumbnail: string;
  thumbTheme: Theme;
}

export const categoryLinks: NavLink[] = [
  {
    url: '/frukost',
    title: 'Frukost',
    imagePath: 'hidden/breakfast.jpg',
    thumbnail: 'breakfast_1x1',
    thumbTheme: Theme.dark,
  },
  {
    url: '/forratt',
    title: 'Förrätt',
    imagePath: 'hidden/starter.jpg',
    thumbnail: 'starter_1x1',
    thumbTheme: Theme.light,
  },
  {
    url: '/huvudratt',
    title: 'Huvudrätt',
    imagePath: 'hidden/main.jpg',
    thumbnail: 'main_1x1',
    thumbTheme: Theme.dark,
  },
  {
    url: '/sallad',
    title: 'Sallad',
    imagePath: 'hidden/salad.jpg',
    thumbnail: 'salad_1x1',
    thumbTheme: Theme.dark,
  },
  {
    url: '/efterratt',
    title: 'Efterrätt',
    imagePath: 'hidden/dessert.jpg',
    thumbnail: 'dessert_1x1',
    thumbTheme: Theme.dark,
  },
  {
    url: '/bakning',
    title: 'Bakning',
    imagePath: 'hidden/baking.jpg',
    thumbnail: 'baking_1x1',
    thumbTheme: Theme.light,
  },
];

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
