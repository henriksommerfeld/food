import { markdownFileSchema, recipeSchema, type RecepieFrontmatter, type Recipe } from '$lib/types'
import slugify from '@sindresorhus/slugify'

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
      const slug = (fileMeta.url || fileSlug).replace(/\/$/, '').split('/').at(-1)

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

let sortedArray = new Array<{ count: number; name: string; slug: string }>()

export async function getTags() {
  if (sortedArray.length) return sortedArray
  const recipes = await getRecipes()
  const allTags = recipes.flatMap((recipe) => recipe.tags)
  const tagCounts = allTags.reduce(
    (tags, tag) => ({ ...tags, [tag]: (tags[tag] || 0) + 1 }),
    {} as Record<string, number>
  )
  const sortedTagNames = Object.keys(tagCounts).toSorted()
  sortedTagNames.forEach((name) => {
    sortedArray.push({ count: tagCounts[name], name: name, slug: slugify(name) })
  })
  return sortedArray
}
