import { recipeFrontmatterSchema } from '$lib/types'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  try {
    const post = await import(`../../recept/${params.slug}.md`)
    const meta = recipeFrontmatterSchema.parse(post.metadata)
    // TODO: Maybe map in some way to make easier to render?
    return {
      content: post.default,
      meta: meta
    }
  } catch (e) {
    error(404, `Could not find ${params.slug}`)
  }
}
