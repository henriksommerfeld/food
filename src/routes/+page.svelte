<script lang="ts">
  import * as config from '$lib/config'
  import { CategoryLinks } from '$lib/constants.js'

  let data
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

<!-- <nav class="categories"> -->
<!--   <ol> -->
<!--     {#each CategoryLinks as category} -->
<!--       <li><a href={category.slug}>{category.title}</a></li> -->
<!--     {/each} -->
<!--   </ol> -->
<!-- </nav> -->

<section>
  <!-- <ul class="posts"> -->
  <!--   {#each data.recept as recept} -->
  <!--     <li class="post"> -->
  <!--       <a href={recept.slug} class="title">{recept.title}</a> -->
  <!--       <p class="description">{recept.description}</p> -->
  <!--     </li> -->
  <!--   {/each} -->
  <!-- </ul> -->
  <a href="shakshuka" class="title">shakshuka</a>
</section>

<style>
  h2 {
    font-style: italic;
  }
</style>
