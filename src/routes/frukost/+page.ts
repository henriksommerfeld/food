import type { Recipe } from '$lib/types'

export async function load({ fetch }) {
  const response = await fetch('api/recept')
  // TODO: Zod validation
  const recept: Recipe[] = await response.json()
  const frukost = recept.filter((recipe) => recipe.category === 'Frukost')
  return { frukost }
}
