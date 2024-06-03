<script lang="ts">
  import type { NavLink } from '$lib/constants'
  import ImageBanner from './image-banner.svelte'
  import BannerHeader from './banner-header.svelte'
  import Searchbox from './searchbox.svelte'

  export let category: NavLink
  export let recipeCount: number
</script>

<ImageBanner imagePath={category.imagePath}>
  <BannerHeader>
    <h1>{category.title}</h1>
    <h2>{recipeCount} recept</h2>
  </BannerHeader>
  <Searchbox />
</ImageBanner>
