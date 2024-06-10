<script>
  import * as config from '$lib/config'
  import { urlSchema } from '$lib/image'
  import { onMount } from 'svelte'
  import HomeLink from '../home-link.svelte'
  import Searchbox from '../searchbox.svelte'

  const title = `Gått vilse? (404) | ${config.title}`
  const lqipImages = import.meta.glob('/src/assets/*{.webp,.jpg,.jpeg,.png,.heif}', {
    import: 'default',
    eager: true,
    query: '?w=16&format=webp&inline&fit=cover&blur=2&as=url&quality=1'
  })

  const images = import.meta.glob('/src/assets/*{.webp,.jpg,.jpeg,.png,.heif}', {
    import: 'default',
    eager: true,
    query: '?w=2500&format=webp&fit=cover&as=url'
  })

  const imagePath = '/src/assets/404.jpg'
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

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="page" style="--image: url({image})">
  <div class="page-content">
    <header>
      <HomeLink />
      <div class="width-constrainer">
        <h1>Gått vilse?</h1>
        <Searchbox />
      </div>
    </header>
    <p>
      Det finns inget på den här adressen, men använd sökfunktionen eller länken till startsidan
      (🏠) i övre vänstra hörnet så hittar du nog rätt.
    </p>
  </div>
</div>

<style>
  .page {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: var(--image);
    width: 100vw;
    height: 100vh;
    color: var(--white);
  }
  .page-content {
    width: 100%;
    background: linear-gradient(
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  p {
    margin: 0;
    margin-bottom: 1.16rem;
    font-size: 1.2rem;
    padding: 2rem 1rem;
    @media (min-width: 768px) {
      padding: 2rem;
      font-size: 1.5rem;
      text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 2px, rgba(255, 255, 255, 0.7) 0px 0px 20px;
    }
    @media (min-width: 1024px) {
      padding: 5rem;
      font-size: 2rem;
    }
    @media (min-width: 2048px) {
      font-size: 2.5rem;
      text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 2px, rgba(255, 255, 255, 0.7) 0px 0px 30px;
    }
  }
  header {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .width-constrainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    min-height: 14rem;
    max-width: 1200px;
    @media (min-width: 1024px) {
      min-height: 18rem;
      justify-content: center;
    }
  }
  h1 {
    margin: 0;
    margin-bottom: 1.16rem;
    padding: 0;
    font-family: 'Domine', sans-serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 2rem;
    line-height: 1.1;
    @media (min-width: 768px) {
      font-size: 2rem;
      text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 2px, rgba(255, 255, 255, 0.7) 0px 0px 30px;
    }
    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }
</style>
