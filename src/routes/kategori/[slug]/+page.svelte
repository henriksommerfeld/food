<script lang="ts">
  import Img from '@zerodevx/svelte-img'
  import type { PageData } from './$types'
  import CategoryBanner from '../../category-banner.svelte'

  export let data: PageData
  const recipes = data.recipes
  const modules = import.meta.glob('/src/uploads/*{.webp,.jpg,.jpeg,.png}', {
    import: 'default',
    eager: true,
    query: { w: 640, h: 480, fit: 'cover', as: 'run' }
  })
  const getImage = (url: string) =>
    Object.entries(modules).filter((i) => i[0] === `/src${url}`)[0][1]
  const getColor = (recept: PageData['recipes'][0]) => {
    return recept.featuredimagetheme === 1 ? '#000000' : '#ffffff'
  }
</script>

<svelte:head>
  <title>{data.category.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.category.title} />
</svelte:head>

<div class="page">
  <CategoryBanner category={data.category} recipeCount={recipes.length} />
  <menu>
    {#each recipes as recept}
      <li>
        <a href="/{recept.slug}">
          <Img src={getImage(recept.featuredimage)} alt="" />
          <div class="title" style="--color: {getColor(recept)}">{recept.title}</div>
        </a>
      </li>
    {/each}
  </menu>
</div>

<style>
  .page {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 160px);
    display: flex;
    flex-direction: column;
    padding-bottom: var(--content-gap-to-footer);
  }
  :global(menu picture img) {
    margin-bottom: -4px;
  }
  menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(15em, 100%), 1fr));
    justify-content: center;
    margin: 0;
    grid-gap: 0.5rem;
    padding: 0.5rem;

    @media (min-width: 550px) {
      grid-gap: 1rem;
      padding: 1rem;
    }

    @media (min-width: 768px) {
      grid-gap: 2rem;
      padding: 2rem;
    }

    @media (min-width: 1400px) {
      grid-gap: 3rem;
      padding: 3rem;
    }
  }
  li {
    list-style: none;
  }
  a {
    display: block;
    width: 100%;
    position: relative;
    transition: filter 150ms ease 0s, box-shadow 150ms ease 0s, font-size 150ms ease 0s;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
    text-align: center;
    overflow: hidden;
  }
  a:hover,
  a:focus {
    filter: brightness(1.1);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 10px;
  }
  :global(a picture img) {
    transition: all 150ms ease 0s;
  }
  :global(a:hover picture img, a:focus picture img) {
    transform: scale(1.05);
  }
  :global(a:hover .title, a:focus .title) {
    font-size: 1.1em;
  }
  .title {
    transition: font-size 100ms ease 0s;
    transform: translateY(-100%);
    position: absolute;
    width: 100%;
    padding: 1rem;
    color: black;
    background-color: rgba(255, 255, 255, 0.7);

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      backdrop-filter: blur(5px);
      background-color: transparent;
      color: var(--color);
    }
  }
</style>
