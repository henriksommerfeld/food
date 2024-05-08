import { getRecipes } from '$lib/database'
import { CategoryLinks } from '$lib/constants'

export async function load({ params }) {
  const slug = `/${params.slug}`
  const allRecipes = await getRecipes()
  const categoryTitle = CategoryLinks.find((x) => x.slug === slug)?.title
  const recipes = allRecipes.filter((x) => x.category === categoryTitle)
  console.log(categoryTitle)
  return { recipes, categoryTitle }
}
