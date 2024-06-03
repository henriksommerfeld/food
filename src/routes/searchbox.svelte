<script lang="ts">
  import { search as sök } from '$lib/search'
  import Image from './image.svelte'
  import { pictureSchema, urlSchema } from '$lib/image'
  import ImageBanner from './image-banner.svelte'
  import BannerHeader from './banner-header.svelte'
  import SearchForm from './search-form.svelte'

  $: searchTerm = ''
  $: results = new Array<any>()
  let termForResults = ''

  let dialog: HTMLDialogElement
  const doSearch = async () => {
    results = await sök(searchTerm)
    termForResults = searchTerm
  }
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
  const getImage = (path: string) => {
    const imagePath = `/src${path}`
    const parsedImageData = pictureSchema.parse(images[imagePath])
    const image = {
      srcset: parsedImageData.sources.webp,
      src: parsedImageData.img.src,
      w: parsedImageData.img.w,
      h: parsedImageData.img.h,
      lqip: urlSchema.parse(lqipImages[imagePath])
    }
    return image
  }
  const getColor = (recept: any) => {
    return recept.featuredimagetheme === 1 ? '#000000' : '#ffffff'
  }
</script>

<SearchForm
  onSubmit={() => {
    dialog.showModal()
    doSearch()
  }}
  bind:searchTerm
/>
<dialog bind:this={dialog} on:close={() => (searchTerm = '')}>
  <div class="page">
    <ImageBanner imagePath="/src/uploads/search-banner.jpg" renderHomeLink={false}>
      <button class="close" aria-label="Stäng sökresultatet" on:click={() => dialog.close()}
        ><img src="/src/assets/close.svg" alt="Stäng sökresultatet" /></button
      >
      <BannerHeader>
        <h1>Recept med <span class="quote">{termForResults}</span></h1>
        <h2>{results.length} recept</h2>
      </BannerHeader>
      <SearchForm onSubmit={() => doSearch()} bind:searchTerm />
    </ImageBanner>
    <menu data-sveltekit-reload>
      {#each results as result}
        {@const image = getImage(result.featuredimage)}
        <li>
          <a href={result.slug}>
            <Image
              src={image.src}
              srcset={image.srcset}
              width={image.w}
              height={image.h}
              lqip={image.lqip}
              alt=""
            />
            <div class="title" style="--color: {getColor(result)}">{result.title}</div>
          </a>
        </li>
      {/each}
    </menu>
  </div>
</dialog>

<style>
  .page {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 160px);
    display: flex;
    flex-direction: column;
    padding-bottom: var(--content-gap-to-footer);
  }
  :global(menu img) {
    margin-bottom: -5px;
  }
  menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(25rem, 100%), 1fr));
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
    width: fit-content;
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
  :global(a img) {
    transition: all 150ms ease 0s;
  }
  :global(a:hover img, a:focus img) {
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
  dialog {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    max-width: none;
    max-height: none;
    border: none;
    /* border-radius: var(--border-radius); */
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
