import { json } from '@sveltejs/kit'
import type { Recipe, RecipeFrontmatter } from '$lib/types'

async function getRecept() {
  const recept = new Array<Recipe>()

  const paths = import.meta.glob('/src/recept/*.md', { eager: true })

  for (const path in paths) {
    const file = paths[path]
    const fileSlug = path.split('/').at(-1)?.replace('.md', '')

    if (file && typeof file === 'object' && 'metadata' in file && fileSlug) {
      const fileMeta = file.metadata as RecipeFrontmatter
      const metadata = fileMeta as Omit<RecipeFrontmatter, 'url'>
      const slug = fileMeta.url || fileSlug
      const post = { ...metadata, slug } satisfies Recipe
      recept.push(post)
    }
  }

  return recept.toSorted((a, b) => b.title.localeCompare(a.title, 'sv-SE'))
}

export async function GET() {
  const recept = await getRecept()
  return json(recept)
}
