import { error } from '@sveltejs/kit'
import { getRecipes } from '../../lib/database'

export async function load({ params }) {
  try {
    const allRecipes = await getRecipes()
    const recipe = allRecipes.find((recipe) => recipe.slug === params.slug)
    if (!recipe) throw error(404, `Could not find ${params.slug}`)
    return recipe
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}
