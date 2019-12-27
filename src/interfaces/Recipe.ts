import { RecipeImage, FancyImage } from '../components/LazyImage';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  featuredImage: RecipeImage;
  cookingTime: {
    active: {
      hours: number;
      minutes: number;
    };
    waiting: {
      days: number;
      hours: number;
      minutes: number;
    };
  };
  servings: number;
  servingsUnit: string;
  ingredients: {
    partIngredients: {
      name?: string;
      ingredients: {
        name: string;
        quantity: number;
        unit: QuantityUnit;
      }[];
    };
  }[];
  body: string;
  tags: string[] | undefined;
}

enum QuantityUnit {
  pieces = 'st',
  liter = 'l',
  deciliter = 'dl',
  centiliter = 'cl',
  milliliter = 'ml',
  tablespoon = 'msk',
  teaspoon = 'tsk',
  gram = 'g',
  hekto = 'hg',
  kilo = 'kg',
}

export interface RecipeData {
  markdownRemark: {
    id: string;
    html: string;
    fileAbsolutePath: string;
    frontmatter: {
      date: string;
      title: string;
      tags: string[];
      description: string;
      category: string;
      servings: number;
      servingslabel: string;
      timeactive: {
        hoursactive: number;
        minutesactive: number;
      };
      timepassive: {
        dayspassive: number;
        hourspassive: number;
        minutespassive: number;
      };
      featuredimage: FancyImage;
    };
  };
}
