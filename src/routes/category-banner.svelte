<script lang="ts">
  import type { NavLink } from '$lib/constants'
  import z from 'zod'
  import { onMount } from 'svelte'
  import IntroBanner from './intro-banner.svelte'

  export let category: NavLink
  export let recipeCount: number
  const imageSchema = z.object({
    sources: z.object({
      avif: z.array(z.object({ src: z.string(), w: z.number() })).length(1),
      webp: z.array(z.object({ src: z.string(), w: z.number() })).length(1)
    }),
    img: z.object({
      src: z.string(),
      w: z.number(),
      h: z.number(),
      lqip: z.string()
    })
  })

  const modules = import.meta.glob('/src/images/*{.webp,.jpg,.jpeg}', {
    import: 'default',
    eager: true,
    query: { w: 2048, fit: 'cover', as: 'run' }
  })
  const backgroundImage = imageSchema.parse(modules[category.imagePath])
  const webpUrl = `${backgroundImage.sources.webp[0].src}`
  const lqipUrl = `data:image/webp;base64,${backgroundImage.img.lqip}`

  $: image = lqipUrl

  onMount(() => {
    const img = new Image()
    img.onload = function () {
      image = webpUrl
    }
    img.src = webpUrl
  })
</script>

<IntroBanner backgroundImage={image}>
  <header>
    <h1>{category.title}</h1>
    <h2>{recipeCount} recept</h2>
  </header>
</IntroBanner>

<style>
  header {
    color: rgb(255, 255, 255);
    text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }
</style>
