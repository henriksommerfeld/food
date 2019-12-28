import { RecipeImage, FancyImage } from '../components/LazyImage';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: category;
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
  ingredients: Ingredients;
  body: string;
  tags: string[] | undefined;
}

export type category =
  | 'Frukost'
  | 'Förrätt'
  | 'Huvudrätt'
  | 'Sallad'
  | 'Efterrätt'
  | 'Bakning';

export interface Ingredients {
  partIngredients: {
    name?: string;
    ingredients: Ingredient[];
  }[];
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: QuantityUnit;
}

export enum QuantityUnit {
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

export interface RecipeQueryData {
  markdownRemark: {
    id: string;
    html: string;
    fileAbsolutePath: string;
    frontmatter: {
      date: string;
      title: string;
      tags: string[];
      description: string;
      category: category;
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
      ingredients: IngredientsQueryData[];
      instructions: {
        partinstructions: {
          partinstructionsname: string;
          partinstructionslist: {
            instruction: string;
          };
        }[];
      };
    };
  };
}

export interface IngredientsQueryData {
  partingredients: {
    partingredientsname: string;
    partingredientslist: {
      ingredient: IngredientQueryData;
    }[];
  };
}

export interface IngredientQueryData {
  ingredientamount: number;
  unit: string;
  ingredientname: string;
}
