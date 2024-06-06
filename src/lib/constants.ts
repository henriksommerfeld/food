import type { Category } from './types'

export enum Theme {
  light = 1,
  dark = 2
}

export type CategoryBanner = {
  title: Category
  imageName: string
}

export type NavLink = {
  slug: string
  url: string
  title: Category
  imagePath: string
  imagePath1x1: string
  thumbTheme: Theme
}

export const CategoryLinks: NavLink[] = [
  {
    slug: '/frukost',
    url: '/kategori/frukost',
    title: 'Frukost',
    imagePath: '/src/uploads/breakfast.jpg',
    imagePath1x1: '/src/uploads/breakfast_1x1.jpg',
    thumbTheme: Theme.dark
  },
  {
    slug: '/forratt',
    url: '/kategori/forratt',
    title: 'Förrätt',
    imagePath: '/src/uploads/starter.jpg',
    imagePath1x1: '/src/uploads/starter_1x1.jpg',
    thumbTheme: Theme.light
  },
  {
    slug: '/huvudratt',
    url: '/kategori/huvudratt',
    title: 'Huvudrätt',
    imagePath: '/src/uploads/main.jpg',
    imagePath1x1: '/src/uploads/main_1x1.jpg',
    thumbTheme: Theme.dark
  },
  {
    slug: '/tillbehor',
    url: '/kategori/tillbehor',
    title: 'Tillbehör',
    imagePath: '/src/uploads/salad.jpg',
    imagePath1x1: '/src/uploads/salad_1x1.jpg',
    thumbTheme: Theme.dark
  },
  {
    slug: '/efterratt',
    url: '/kategori/efterratt',
    title: 'Efterrätt',
    imagePath: '/src/uploads/dessert.jpg',
    imagePath1x1: '/src/uploads/dessert_1x1.jpg',
    thumbTheme: Theme.dark
  },
  {
    slug: '/bakning',
    url: '/kategori/bakning',
    title: 'Bakning',
    imagePath: '/src/uploads/baking.jpg',
    imagePath1x1: '/src/uploads/baking_1x1.jpg',
    thumbTheme: Theme.light
  }
]
