import type { Recipe } from '$lib/types'

export async function load({ fetch }) {
  const response = await fetch('api/recept')
  //console.dir({ response }, { depth: null })
  // TODO: Zod validation
  const recept: Recipe[] = await response.json()
  return { recept }
}
