<script lang="ts">
  import PageWrapper from '../page-wrapper.svelte'
  import Image from '../image.svelte'
  import ImageBanner from '../image-banner.svelte'
  import Ingredients from '../ingredients.svelte'
  import Instructions from '../instructions.svelte'
  import type { PageData } from './$types'
  import { formatDuration } from '$lib/time'
  import { pictureSchema, urlSchema } from '$lib/image'
  import { servingsUnitFormatted } from '$lib/servings'

  export let data: PageData
  export const recipe = data

  const title = `${recipe.title} | ${recipe.category}`
  const imagePath = `/src${recipe.featuredimage}`
  const lqipImages = import.meta.glob('/src/uploads/*{.webp,.jpg,.jpeg,.png,.heif}', {
    import: 'default',
    eager: true,
    query: '?w=200&format=webp&inline&as=url&quality=10'
  })
  const images = import.meta.glob('/src/uploads/*{.webp,.jpg,.jpeg,.png,.heif}', {
    import: 'default',
    eager: true,
    query: '?w=800;1500&format=webp&as=picture'
  })
  const parsedImageData = pictureSchema.parse(images[imagePath])
  const image = {
    srcset: parsedImageData.sources.webp,
    src: parsedImageData.img.src,
    w: parsedImageData.img.w,
    h: parsedImageData.img.h,
    lqip: urlSchema.parse(lqipImages[imagePath])
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
</svelte:head>

<PageWrapper>
  <div class="page">
    <div class="shared-intro-banner">
      <ImageBanner {imagePath}>
        <header>
          <h1>{recipe.title}</h1>
        </header>
      </ImageBanner>

      <article>
        <div class="article-styled">
          {#if recipe.description || recipe.tools}
            <div class="top-columns">
              {#if recipe.description}
                <p class="description">{recipe.description}</p>
              {/if}
              {#if recipe.tools}<section class="tools">
                  <h2 class="tools-title">
                    <img class="tools-icon" src="/img/tools.svg" alt="tools" />Redskap
                  </h2>
                  <p>{recipe.tools}</p>
                </section>
              {/if}
            </div>
          {/if}
          <section class="cooking-time-and-servings">
            <div>
              <img src="/img/clock.svg" alt="cooking time" />
              <div>
                Tillagning: {formatDuration(
                  0,
                  recipe.timeactive.hoursactive,
                  recipe.timeactive.minutesactive
                )}
              </div>
            </div>
            <div>
              <img src="/img/clock-wait.svg" alt="waiting time" />
              <div>
                Väntetid: {formatDuration(
                  0,
                  recipe.timepassive.hourspassive,
                  recipe.timepassive.minutespassive
                )}
              </div>
            </div>
            <div>
              <img src="/img/servings.svg" alt="servings" />
              <div>
                {recipe.servings}
                {servingsUnitFormatted(recipe.servings, recipe.servingslabel)}
              </div>
            </div>
          </section>
          <div class="columns">
            <Ingredients {recipe} />
            <div>
              <Instructions instructions={recipe.instructions} />
              <div class="featured-thumbnail">
                <Image
                  src={image.src}
                  srcset={image.srcset}
                  width={image.w}
                  height={image.h}
                  lqip={image.lqip}
                  alt=""
                />
              </div>
              <div class="prose">
                <svelte:component this={data.content} />
              </div>
            </div>
          </div>
          {#if recipe.tags.length > 0}
            <div class="tags">
              <span />
              {#each recipe.tags as tag, index}
                <a href="/">{tag}</a>{#if index + 1 < recipe.tags.length}, &nbsp{/if}
              {/each}
            </div>
          {/if}
        </div>
      </article>
    </div>
  </div>
</PageWrapper>

<style>
  .tags {
    margin-top: var(--spacing-double);
  }
  .tags span {
    padding-right: 0.5em;
    vertical-align: top;
  }
  .tags span::before {
    content: url('/img/tag-grey500.svg');
    width: 1rem;
  }
  .featured-thumbnail {
    margin: 0;
    padding: 4px 4px 0 4px;
    box-shadow: rgba(34, 25, 25, 0.4) 0 1px 3px !important;
    background-color: #fff;
    margin-bottom: var(--spacing-section);
  }
  .page {
    width: 100%;
    padding-bottom: 5rem;
  }
  h1 {
    color: white;
    text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
    margin-left: 0;
    margin-bottom: 1.16rem;
    font-family: 'Domine', sans-serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 2rem;
    line-height: 1.1;
  }
  article {
    width: 100%;
    margin: 0px auto;

    @media (min-width: 1024px) {
      max-width: var(--content-max-width);
    }
  }
  .article-styled {
    padding: var(--spacing-default);
    background-color: white;

    @media (min-width: 768px) {
      padding: var(--spacing-double);
    }

    @media (min-width: 1400px) {
      transform: translateY(var(--content-offset));
      border-radius: 4px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
      padding: var(--spacing-x3);
    }
  }
  .top-columns {
    display: grid;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: var(--spacing-x3);
    }
  }
  .description {
    margin-bottom: 3rem;
    margin-top: 0;
    font-style: italic;
  }
  .tools-icon {
    height: 1.2em;
    margin-right: var(--spacing-half);
  }
  .tools-title {
    font-size: 1.1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .cooking-time-and-servings {
    display: grid;
    grid-gap: var(--spacing-half);
    grid-template-columns: auto;
    margin-bottom: var(--spacing-section);

    @media (min-width: 768px) {
      grid-template-columns: auto auto auto;
    }
  }
  .cooking-time-and-servings div {
    display: flex;
    align-items: center;
  }
  .cooking-time-and-servings img {
    height: 1.5em;
    margin-right: 0.5rem;
  }
  .cooking-time-and-servings img:not(:first-child) {
    margin-left: var(--spacing-default);
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr minmax(0px, 2fr);
    gap: 3rem;
  }
</style>
