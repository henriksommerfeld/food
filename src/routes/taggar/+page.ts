import { getTags } from '$lib/database'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  try {
    const tags = await getTags()
    return { tags }
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}
