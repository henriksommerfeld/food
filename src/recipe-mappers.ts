import {
  IngredientsQueryData,
  Ingredients,
  Ingredient,
  QuantityUnit,
  InstructionsQueryData,
  Instructions,
} from './interfaces/Recipe';

export function toIngredients(data: IngredientsQueryData[]): Ingredients {
  const ingredients: Ingredients = { ingredientsGroup: [] };
  if (!(data?.length > 0)) return ingredients;
  if (!data[0].partingredients) return ingredients;

  data.forEach(x => {
    const ingredientList: Ingredient[] = [];

    x.partingredients?.partingredientslist?.forEach(y => {
      if (y.ingredient) {
        ingredientList.push({
          name: y.ingredient.ingredientname,
          quantity: y.ingredient.ingredientamount,
          unit: y.ingredient.unit as QuantityUnit,
        });
      }
    });

    ingredients.ingredientsGroup.push({
      name: x?.partingredients?.partingredientsname,
      ingredients: ingredientList,
    });
  });

  return ingredients;
}

export function toInstructions(data: InstructionsQueryData[]): Instructions {
  const instructions: Instructions = { instructionsGroup: [] };
  if (!(data?.length > 0)) return instructions;
  if (!data[0].partinstructions) return instructions;

  data.forEach(x => {
    const instructionsList: string[] = [];

    x.partinstructions?.partinstructionslist?.forEach(y => {
      instructionsList.push(y.instruction);
    });

    instructions.instructionsGroup.push({
      name: x?.partinstructions?.partinstructionsname,
      instructions: instructionsList,
    });
  });

  return instructions;
}

export function servingsUnitFormatted(
  servings: number,
  servingsUnit: string
): string {
  if (servings === 1 && servingsUnit === 'portioner') return 'portion';

  return servingsUnit;
}
