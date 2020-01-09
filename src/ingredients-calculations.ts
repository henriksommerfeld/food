import { Ingredient, QuantityUnit } from './interfaces/Recipe';
import Fraction from 'fraction.js';

export function getQuantity(
  ingredient: Ingredient,
  defaultServings: number,
  currentServings: number
): Ingredient {
  const changeFactor = currentServings / defaultServings;

  if (changeFactor < 0.01) return ingredient;

  if (ingredient.unit === QuantityUnit.pieces)
    return quantityForPieces(ingredient, changeFactor);

  if (isWeight(ingredient.unit)) {
    return quantityForWeight(ingredient, changeFactor);
  }
  if (isVolume(ingredient.unit))
    return quantityForVolume(ingredient, changeFactor);

  return null;
}

export function toFraction(quantity: number): string {
  const formattedQuantity = new Fraction(quantity)
    .simplify(0.01)
    .toFraction(true);
  return formattedQuantity;
}

function quantityForPieces(
  ingredient: Ingredient,
  changeFactor: number
): Ingredient {
  const changedQuantity = twoDecimals(ingredient.quantity * changeFactor);
  return {
    name: ingredient.name,
    quantity: changedQuantity,
    unit: ingredient.unit,
  };
}

function quantityForVolume(
  ingredient: Ingredient,
  changeFactor: number
): Ingredient {
  const ml = volumeInMilliliters(ingredient);
  const mlForServings = ml * changeFactor;
  const calculatedIngredient: Ingredient = {
    name: ingredient.name,
    quantity: mlForServings,
    unit: QuantityUnit.milliliter,
  };

  return volumeInBestUnit(calculatedIngredient);
}

function quantityForWeight(
  ingredient: Ingredient,
  changeFactor: number
): Ingredient {
  const grams = weightInGrams(ingredient);
  const gramsForServings = grams * changeFactor;
  const calculatedIngredient: Ingredient = {
    name: ingredient.name,
    quantity: gramsForServings,
    unit: QuantityUnit.gram,
  };

  return weightInBestUnit(calculatedIngredient);
}

function weightInBestUnit(ingredient: Ingredient): Ingredient {
  if (ingredient.quantity >= 1000)
    return {
      quantity: ingredient.quantity / 1000,
      unit: QuantityUnit.kilo,
      name: ingredient.name,
    };

  return ingredient;
}

function volumeInBestUnit(ingredient: Ingredient): Ingredient {
  if (ingredient.quantity >= 1000)
    return {
      quantity: ingredient.quantity / 1000,
      unit: QuantityUnit.liter,
      name: ingredient.name,
    };

  if (ingredient.quantity >= 100)
    return {
      quantity: ingredient.quantity / 100,
      unit: QuantityUnit.deciliter,
      name: ingredient.name,
    };

  if (ingredient.quantity >= 15)
    return {
      quantity: ingredient.quantity / 15,
      unit: QuantityUnit.tablespoon,
      name: ingredient.name,
    };

  if (ingredient.quantity >= 5)
    return {
      quantity: ingredient.quantity / 5,
      unit: QuantityUnit.teaspoon,
      name: ingredient.name,
    };

  return {
    quantity: ingredient.quantity,
    unit: QuantityUnit.milliliter,
    name: ingredient.name,
  };
}

function weightInGrams(ingredient: Ingredient): number {
  if (ingredient.unit === QuantityUnit.gram) return ingredient.quantity;
  if (ingredient.unit === QuantityUnit.hekto) return ingredient.quantity * 100;
  if (ingredient.unit === QuantityUnit.kilo) return ingredient.quantity * 1000;
}

function volumeInMilliliters(ingredient: Ingredient): number {
  if (ingredient.unit === QuantityUnit.milliliter) return ingredient.quantity;
  if (ingredient.unit === QuantityUnit.centiliter)
    return ingredient.quantity * 10;
  if (ingredient.unit === QuantityUnit.deciliter)
    return ingredient.quantity * 100;
  if (ingredient.unit === QuantityUnit.liter) return ingredient.quantity * 1000;
  if (ingredient.unit === QuantityUnit.teaspoon) return ingredient.quantity * 5;
  if (ingredient.unit === QuantityUnit.tablespoon)
    return ingredient.quantity * 15;
}

function isWeight(unit: QuantityUnit): boolean {
  return (
    unit === QuantityUnit.gram ||
    unit === QuantityUnit.hekto ||
    unit === QuantityUnit.kilo
  );
}

function isVolume(unit: QuantityUnit): boolean {
  return (
    unit === QuantityUnit.liter ||
    unit === QuantityUnit.deciliter ||
    unit === QuantityUnit.centiliter ||
    unit === QuantityUnit.milliliter ||
    unit === QuantityUnit.tablespoon ||
    unit === QuantityUnit.teaspoon
  );
}

function twoDecimals(value: number): number {
  return Math.round(value * 100) / 100;
}
