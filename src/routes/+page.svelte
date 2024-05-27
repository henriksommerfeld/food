<script lang="ts">
  import * as config from '$lib/config'
  import { CategoryLinks, type NavLink } from '$lib/constants'
  import { pictureSchema, urlSchema } from '$lib/image'
  import Image from './image.svelte'

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
  const getImage = (path: string) => {
    const parsedImageData = pictureSchema.parse(images[path])
    const image = {
      srcset: parsedImageData.sources.webp,
      src: parsedImageData.img.src,
      w: parsedImageData.img.w,
      h: parsedImageData.img.h,
      lqip: urlSchema.parse(lqipImages[path])
    }
    return image
  }
  const getColor = (category: NavLink) => {
    return category.thumbTheme === 1 ? '#000000' : '#ffffff'
  }
</script>

<svelte:head>
  <title>{config.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={config.title} />
</svelte:head>

<header>
  <h1>{config.title}</h1>
  <h2>{config.description}</h2>
</header>

<div class="page">
  <!-- Banner -->
  <section>
    <menu>
      {#each CategoryLinks as category}
        {@const image = getImage(category.imagePath1x1)}
        <li>
          <a href={category.url}>
            <Image
              src={image.src}
              srcset={image.srcset}
              width={image.w}
              height={image.h}
              lqip={image.lqip}
              alt=""
            />
            <div class="title" style="--color: {getColor(category)}">{category.title}</div>
          </a>
        </li>
      {/each}
    </menu>
  </section>
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
  :global(menu img) {
    margin-bottom: -5px;
  }
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
  li {
    list-style: none;
    margin: 0;
    text-align: center;
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
</style>
