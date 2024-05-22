import { tailwindColors } from './tailwind-colors'
import type { Category } from './types'

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
  section: '3rem'
}

export const zIndexes = {
  searchBox: 1,
  mobileMenu: 2,
  headerNav: 3
}

export const layout = {
  contentMaxWidth: 1200,
  borderRadius: '0.25rem'
}

export const urls = {
  siteBaseUrl: 'https://recept.netlify.com'
}

export const breakpoints = {
  xs: '550px',
  small: '768px',
  medium: '1024px',
  desktop: '1024px',
  large: '1400px',
  xl: '2048px'
}

export const masonryBreakpoints = {
  default: 6,
  2400: 4,
  1600: 3,
  1024: 2,
  768: 1
}

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
  selectionBackground: tailwindColors.teal700
}

export const fonts = {
  headingFamily: `'Domine', 'serif'`,
  bodyFamily: `'Open Sans', 'sans-serif'`
}

export const links = {
  tags: {
    url: '/taggar',
    title: 'Se alla taggar'
  }
}

export enum Theme {
  light = 1,
  dark = 2
}

export type CategoryBanner = {
  title: Category
  imageName: string
}

export const categoryBanners: CategoryBanner[] = [
  {
    title: 'Frukost',
    imageName: 'breakfast-hero'
  },
  {
    title: 'Förrätt',
    imageName: 'dessert-hero'
  },
  {
    title: 'Huvudrätt',
    imageName: 'main-hero'
  },
  {
    title: 'Efterrätt',
    imageName: 'dessert-hero'
  },
  {
    title: 'Bakning',
    imageName: 'baking-hero'
  }
]

export type NavLink = {
  slug: string
  url: string
  title: Category
  imagePath: string
  thumbnail: string
  thumbTheme: Theme
}

export const CategoryLinks: NavLink[] = [
  {
    slug: '/frukost',
    url: '/kategori/frukost',
    title: 'Frukost',
    imagePath: '/src/images/breakfast.jpg',
    thumbnail: 'breakfast_1x1.jpg',
    thumbTheme: Theme.dark
  }
  // {
  //   slug: '/forratt',
  //   url: '/kategori/forratt',
  //   title: 'Förrätt',
  //   imagePath: 'hidden/starter.jpg',
  //   thumbnail: 'starter_1x1',
  //   thumbTheme: Theme.light
  // },
  // {
  //   slug: '/huvudratt',
  //   url: '/kategori/huvudratt',
  //   title: 'Huvudrätt',
  //   imagePath: 'hidden/main.jpg',
  //   thumbnail: 'main_1x1',
  //   thumbTheme: Theme.dark
  // },
  // {
  //   slug: '/tillbehor',
  //   url: '/kategori/tillbehor',
  //   title: 'Tillbehör',
  //   imagePath: 'hidden/salad.jpg',
  //   thumbnail: 'salad_1x1',
  //   thumbTheme: Theme.dark
  // },
  // {
  //   slug: '/efterratt',
  //   url: '/kategori/efterratt',
  //   title: 'Efterrätt',
  //   imagePath: 'hidden/dessert.jpg',
  //   thumbnail: 'dessert_1x1',
  //   thumbTheme: Theme.dark
  // },
  // {
  //   slug: '/bakning',
  //   url: '/kategori/bakning',
  //   title: 'Bakning',
  //   imagePath: 'hidden/baking.jpg',
  //   thumbnail: 'baking_1x1',
  //   thumbTheme: Theme.light
  // }
]
