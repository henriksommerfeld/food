<script lang="ts">
  import Img from '@zerodevx/svelte-img'
  import type { PageData } from './$types'
  import CategoryBanner from '../../category-banner.svelte'

  export let data: PageData
  const recipes = data.recipes
  const modules = import.meta.glob('/src/uploads/*{.webp,.jpg,.jpeg,.png}', {
    import: 'default',
    eager: true,
    query: { w: 640, h: 640, fit: 'cover', as: 'run' }
  })
  const getImage = (url: string) =>
    Object.entries(modules).filter((i) => i[0] === `/src${url}`)[0][1]
</script>

<svelte:head>
  <title>{data.category.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.category.title} />
</svelte:head>

<CategoryBanner category={data.category} recipeCount={recipes.length} />

<nav>
  <ul class="posts">
    {#each recipes as recept}
      <li class="post">
        <a href="/{recept.slug}" class="title">
          <Img src={getImage(recept.featuredimage)} alt={recept.title} />
          {recept.title}</a
        >
        <p class="description">{recept.description}</p>
      </li>
    {/each}
  </ul>
</nav>
