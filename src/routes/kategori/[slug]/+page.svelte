<script lang="ts">
  import PageWrapper from '../../page-wrapper.svelte'
  import BannerMainContainer from '../../banner-main-container.svelte'
  import CategoryBanner from '../../category-banner.svelte'
  import type { PageData } from './$types'
  import { getColor, getImage } from '$lib/image'
  import MenuGrid from '../../menu-grid.svelte'
  import MenuGridImageLink from '../../menu-grid-image-link.svelte'

  export let data: PageData
  const recipes = data.recipes
  const lqipImages = import.meta.glob('/src/uploads/*{.webp,.jpg,.jpeg,.png,.heif}', {
    import: 'default',
    eager: true,
    query: '?w=128&h=96&format=webp&inline&as=url&quality=10'
  })
  const images = import.meta.glob('/src/uploads/*{.webp,.jpg,.jpeg,.png,.heif}', {
    import: 'default',
    eager: true,
    query: '?w=640;800&h=480;600&fit-cover&format=webp&as=picture'
  })
</script>

<svelte:head>
  <title>{data.category.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.category.title} />
</svelte:head>

<PageWrapper>
  <BannerMainContainer>
    <CategoryBanner category={data.category} recipeCount={recipes.length} />
    <MenuGrid>
      {#each recipes as recept}
        {@const image = getImage(images, lqipImages, `/src${recept.featuredimage}`)}
        <MenuGridImageLink
          href="/{recept.slug}"
          title={recept.title}
          titleColor={getColor(recept.featuredimagetheme)}
          {image}
        />
      {/each}
    </MenuGrid>
  </BannerMainContainer>
</PageWrapper>
