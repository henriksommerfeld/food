<script lang="ts">
  import * as config from '$lib/config'
  import { CategoryLinks } from '$lib/constants'
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

<nav class="categories">
  <ol>
    {#each CategoryLinks as category}
      <li><a href={category.url}>{category.title}</a></li>
    {/each}
  </ol>
</nav>

<style>
  h2 {
    font-style: italic;
  }
</style>
