<script lang="ts">
  import z from 'zod'
  import { onMount } from 'svelte'
  import Banner from './banner.svelte'

  export let imagePath: string
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

  const modules = import.meta.glob('/src/{images,uploads}/*{.webp,.jpg,.jpeg}', {
    import: 'default',
    eager: true,
    query: { w: 2048, fit: 'cover', as: 'run' }
  })
  const backgroundImage = imageSchema.parse(modules[imagePath])
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

<Banner imagePath={image}>
  <slot />
</Banner>
