import { getRecipes } from '$lib/database'
import { CategoryLinks } from '$lib/constants'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  const slug = `/${params.slug}`
  const allRecipes = await getRecipes()
  const category = CategoryLinks.find((x) => x.slug === slug)!
  if (!category) throw error(404, `Could not find ${slug}`)
  const recipes = allRecipes.filter((x) => x.category === category.title)
  return { recipes, category }
}
