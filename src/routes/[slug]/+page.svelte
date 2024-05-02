<script lang="ts">
  import IntroBanner from '../intro-banner.svelte'
  import type { PageData } from './$types'
  import { formatDuration } from '$lib/time'
  import { servingsUnitFormatted } from '$lib/servings'

  export let data: PageData
  export const recipe = data.meta
</script>

<svelte:head>
  <title>{recipe.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={recipe.title} />
</svelte:head>

<div class="page">
  <div class="shared-intro-banner">
    <IntroBanner backgroundImage={recipe.featuredimage}>
      <header>
        <h1>{recipe.title}</h1>
      </header>
    </IntroBanner>

    <article>
      <div class="article-styled">
        {#if recipe.description && recipe.tools}
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
            <p>
              Tillagning: {formatDuration(
                0,
                recipe.timeactive.hoursactive,
                recipe.timeactive.minutesactive
              )}
            </p>
          </div>
          <div>
            <img src="/img/clock-wait.svg" alt="waiting time" />
            <p>
              Väntetid: {formatDuration(
                0,
                recipe.timepassive.hourspassive,
                recipe.timepassive.minutespassive
              )}
            </p>
          </div>
          <div>
            <img src="/img/servings.svg" alt="servings" />
            <p>{recipe.servings} {servingsUnitFormatted(recipe.servings, recipe.servingslabel)}</p>
          </div>
        </section>
        <div class="tags">
          {#if recipe.tags.length > 0}
            <ul>
              {#each recipe.tags as tag}
                <li>&num;{tag}</li>
              {/each}
            </ul>
          {/if}
        </div>

        <div class="prose">
          <svelte:component this={data.content} />
        </div>
      </div>
    </article>
  </div>
</div>

<style>
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
</style>
