import { recipeSchema } from '$lib/types'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  try {
    const post = await import(`../../recept/${params.slug}.md`)
    const meta = recipeSchema.safeParse(post.metadata)
    if (!meta.success) {
      console.log(`recept/${params.slug}.md has invalid frontmatter`)
      console.dir(meta.error.errors, { depth: null })
      throw error(500, `Invalid frontmatter for /${params.slug}`)
    }
    return {
      content: post.default,
      meta: meta.data,
      slug: params.slug
    }
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}
