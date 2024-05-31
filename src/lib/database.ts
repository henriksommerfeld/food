import { markdownFileSchema, recipeSchema, type RecepieFrontmatter, type Recipe } from '$lib/types'

const recipes = new Array<Recipe>()

export async function getRecipes() {
  if (recipes.length) return recipes

  const paths = import.meta.glob('/src/recept/*.md', { eager: true })

  for (const path in paths) {
    const mardownFile = paths[path]
    const fileSlug = path.split('/').at(-1)?.replace('.md', '')
    const markdownResult = markdownFileSchema.safeParse(mardownFile)

    if (markdownResult.success && fileSlug) {
      const file = markdownResult.data
      const fileMeta = file.metadata as RecepieFrontmatter
      const metadata = fileMeta as Omit<RecepieFrontmatter, 'url'>
      const slug = (fileMeta.url || fileSlug).split('/').at(-1)

      const recipe = recipeSchema.safeParse({
        ...metadata,
        slug,
        content: file.default
      })
      if (recipe.success) {
        if (!recipe.data.hidden) {
          recipes.push(recipe.data)
        }
      } else {
        console.dir(recipe.error, { depth: 10 })
        throw new Error(`Invalid recipe /${path}`, recipe.error)
      }
    }
  }

  recipes.sort((a, b) => a.title.localeCompare(b.title, 'sv'))
  return recipes
}
