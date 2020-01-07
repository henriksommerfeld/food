import { Ingredient, QuantityUnit } from './interfaces/Recipe';
import Fraction from 'fraction.js';

export function getQuantity(
  ingredient: Ingredient,
  defaultServings: number,
  currentServings: number
): Ingredient {
  const changeFactor = currentServings / defaultServings;

  if (changeFactor === 0) return ingredient;

  // Pieces
  if (ingredient.unit === QuantityUnit.pieces) {
    const changedQuantity = twoDecimals(ingredient.quantity * changeFactor);

    return {
      name: ingredient.name,
      quantity: changedQuantity,
      unit: ingredient.unit,
    };
  }

  // Weight

  // Volume

  return null;
}

export function toFraction(quantity: number): string {
  const formattedQuantity = new Fraction(quantity)
    .simplify(0.01)
    .toFraction(true);
  return formattedQuantity;
}

function twoDecimals(value: number): number {
  return Math.round(value * 100) / 100;
}
