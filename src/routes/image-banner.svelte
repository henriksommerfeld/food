<script lang="ts">
  import z from 'zod'
  import { onMount } from 'svelte'
  import Banner from './banner.svelte'

  export let imagePath: string

  const lqipImages = import.meta.glob('/src/uploads/*{.webp,.jpg,.jpeg,.png,.heif}', {
    import: 'default',
    eager: true,
    query: '?w=16&format=webp&inline&fit=cover&blur=2&as=url&quality=1'
  })

  const images = import.meta.glob('/src/uploads/*{.webp,.jpg,.jpeg,.png,.heif}', {
    import: 'default',
    eager: true,
    query: '?w=2500&format=webp&fit=cover&as=url'
  })

  const urlSchema = z.string()
  const lqipUrl = urlSchema.parse(lqipImages[imagePath])
  const webpUrl = urlSchema.parse(images[imagePath])
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
