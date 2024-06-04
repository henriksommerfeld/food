<script lang="ts">
  import * as config from '$lib/config'
  import BannerHeader from './banner-header.svelte'
  import ImageBanner from './image-banner.svelte'
  import PageWrapper from './page-wrapper.svelte'
  import { CategoryLinks } from '$lib/constants'
  import { getColor, getImage } from '$lib/image'
  import Searchbox from './searchbox.svelte'
  import MenuGridImageLink from './menu-grid-image-link.svelte'
  import BannerMainContainer from './banner-main-container.svelte'

  const lqipImages = import.meta.glob('/src/uploads/*1x1.jpg', {
    import: 'default',
    eager: true,
    query: '?w=128&aspect=1:1&format=webp&inline&as=url&quality=10'
  })
  const images = import.meta.glob('/src/uploads/*1x1.jpg', {
    import: 'default',
    eager: true,
    query: '?w=640;800&aspect=1:1&fit-cover&format=webp&as=picture'
  })
</script>

<svelte:head>
  <title>{config.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={config.title} />
</svelte:head>

<PageWrapper>
  <BannerMainContainer>
    <ImageBanner imagePath="/src/uploads/startpage-banner.jpg">
      <BannerHeader>
        <h1>{config.title}</h1>
        <h2>{config.description} recept</h2>
      </BannerHeader>
      <Searchbox />
    </ImageBanner>
    <section>
      <menu>
        {#each CategoryLinks as category}
          {@const image = getImage(images, lqipImages, category.imagePath1x1)}
          <MenuGridImageLink
            href={category.url}
            title={category.title}
            titleColor={getColor(category.thumbTheme)}
            {image}
          />
        {/each}
      </menu>
    </section>
  </BannerMainContainer>
</PageWrapper>

<style>
  section {
    display: flex;
    justify-content: center;
    padding: var(--spacing-default);

    @media (min-width: 768px) {
      padding: var(--spacing-double);
    }

    @media (min-width: 2048px) {
      padding: var(--spacing-x3);
    }
  }
  menu {
    display: grid;
    grid-gap: var(--spacing-default);
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: 550px) {
      grid-template-columns: repeat(2, auto);
    }

    @media (min-width: 768px) {
      grid-gap: var(--spacing-double);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, auto);
    }

    @media (min-width: 2048px) {
      grid-template-columns: repeat(6, auto);
      grid-gap: var(--spacing-x3);
    }
  }
</style>
