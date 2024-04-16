<script lang="ts">
  import * as config from '$lib/config'
  import { CategoryLinks } from '$lib/constants.js'
  import type { PageData } from './$types'

  export let data: PageData
  export const frukost = data.frukost
</script>

<svelte:head>
  <title>Frukost</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Frukost" />
</svelte:head>

<header>
  <h1>Frukost</h1>
</header>

<nav>
  <ul class="posts">
    {#each frukost as recept}
      <li class="post">
        <a href={recept.slug} class="title">
          <img width="300" src={recept.featuredimage} alt={recept.title} />
          {recept.title}</a
        >
        <p class="description">{recept.description}</p>
      </li>
    {/each}
  </ul>
</nav>
