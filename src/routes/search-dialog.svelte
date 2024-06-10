<script lang="ts">
  import { getColor, getImage } from '$lib/image'
  import type { RecipeSearchResult } from '$lib/search'
  import ImageBanner from './image-banner.svelte'
  import BannerHeader from './banner-header.svelte'
  import SearchForm from './search-form.svelte'
  import CloseSvg from '/src/assets/close.svg'
  import MenuGridImageLink from './menu-grid-image-link.svelte'
  import BannerMainContainer from './banner-main-container.svelte'

  export let results = new Array<RecipeSearchResult>()
  export let searchTerm = ''
  export let termForResults = ''
  export let onSubmit: () => Promise<void> | void
  export const show = () => dialog.showModal()
  let dialog: HTMLDialogElement

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

<dialog bind:this={dialog} on:close={() => (searchTerm = '')}>
  <BannerMainContainer>
    <ImageBanner imagePath="/src/uploads/search-banner.jpg" renderHomeLink={false}>
      <button class="close" aria-label="Stäng sökresultatet" on:click={() => dialog.close()}>
        <img src={CloseSvg} alt="Stäng sökresultatet" />
      </button>
      <BannerHeader>
        <h1>Recept med <span class="quote">{termForResults}</span></h1>
        <h2>{results.length} recept</h2>
      </BannerHeader>
      <SearchForm {onSubmit} bind:searchTerm />
    </ImageBanner>
    <menu data-sveltekit-reload>
      {#each results as result}
        {@const image = getImage(images, lqipImages, `/src${result.featuredimage}`)}
        <MenuGridImageLink
          href={`/${result.slug}`}
          title={result.title}
          titleColor={getColor(result.featuredimagetheme)}
          {image}
        />
      {/each}
    </menu>
  </BannerMainContainer>
</dialog>

<style>
  menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(25rem, 100%), 1fr));
    justify-content: center;
    margin: 0;
    grid-gap: 1rem;
    padding: 1rem;

    @media (min-width: 768px) {
      grid-gap: 2rem;
      padding: 2rem;
    }

    @media (min-width: 1400px) {
      grid-gap: 3rem;
      padding: 3rem;
    }
  }
  dialog {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    max-width: none;
    max-height: none;
    border: none;
  }
  dialog::backdrop {
    backdrop-filter: blur(10px);
  }
  :global(html:has(dialog[open])) {
    overflow: hidden;
  }
  .quote::before {
    content: open-quote;
  }
  .quote::after {
    content: close-quote;
  }
  button.close {
    background: var(--white);
    border: none;
    position: absolute;
    top: var(--spacing-half);
    right: var(--spacing-default);
    margin: 0;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.6);
    transition: transform 400ms ease, box-shadow 200ms ease;

    @media (min-width: 1024px) {
      top: -var(--spacing-default);
      right: -var(--spacing-default);
    }
    &:hover {
      transform: rotate(180deg) scale(1.1);
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    }
  }
  .close img {
    width: 2rem;
    margin: 0;
  }
</style>
