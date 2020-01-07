import { Ingredient, QuantityUnit } from './interfaces/Recipe';
import Fraction from 'fraction.js';

export function getQuantity(
  ingredient: Ingredient,
  defaultServings: number,
  currentServings: number
): Ingredient {
  const changeFactor = currentServings / defaultServings;

  if (changeFactor === 0) return ingredient;

  const changedQuantity = twoDecimals(ingredient.quantity * changeFactor);

  // Pieces
  if (ingredient.unit === QuantityUnit.pieces)
    return quantityForPieces(ingredient, changedQuantity);

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

function quantityForPieces(
  ingredient: Ingredient,
  changedQuantity: number
): Ingredient {
  return {
    name: ingredient.name,
    quantity: changedQuantity,
    unit: ingredient.unit,
  };
}

function twoDecimals(value: number): number {
  return Math.round(value * 100) / 100;
}
