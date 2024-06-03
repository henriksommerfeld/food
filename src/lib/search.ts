import { getRecipes } from '$lib/database'
import MiniSearch from 'minisearch'

export const search = async (query: string) => {
  const allRecipes = await getRecipes()
  const searchableProps = allRecipes.map((file, index) => ({
    id: index,
    title: file.title,
    slug: file.slug,
    ingredients: file.ingredients.ingredientsGroup.flatMap((x) => x.ingredients.map((y) => y.name)),
    tags: file.tags,
    featuredimage: file.featuredimage,
    featuredimagetheme: file.featuredimagetheme
  }))
  const miniSearch = new MiniSearch({
    fields: ['title', 'tags', 'ingredients'],
    storeFields: ['title', 'slug', 'featuredimage', 'featuredimagetheme']
  })
  miniSearch.addAll(searchableProps)
  return miniSearch.search(query)
}
