import { json } from '@sveltejs/kit'
import type { Recipe, RecipeWithSlug } from '$lib/types'

async function getRecept() {
  const recept = new Array<RecipeWithSlug>()

  const paths = import.meta.glob('/src/recept/*.md', { eager: true })

  for (const path in paths) {
    const file = paths[path]
    const fileSlug = path.split('/').at(-1)?.replace('.md', '')

    if (file && typeof file === 'object' && 'metadata' in file && fileSlug) {
      const fileMeta = file.metadata as Recipe
      const metadata = fileMeta as Omit<Recipe, 'url'>
      const slug = fileMeta.url || fileSlug
      const post = { ...metadata, slug } satisfies RecipeWithSlug
      recept.push(post)
    }
  }

  return recept.toSorted((a, b) => b.title.localeCompare(a.title, 'sv-SE'))
}

export async function GET() {
  const recept = await getRecept()
  return json(recept)
}
