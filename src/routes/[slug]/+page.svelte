<script lang="ts">
  import { formatDate } from '$lib/utils'

  export let data
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <hgroup>
    <h1>{data.meta.title}</h1>
  </hgroup>

  <!-- <div class="tags"> -->
  <!--   {#each data.meta.categories as category} -->
  <!--     <span class="surface-4">&num;{category}</span> -->
  <!--   {/each} -->
  <!-- </div> -->

  <div class="prose">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  article {
    max-inline-size: var(--size-content-3);
    margin-inline: auto;
  }
</style>
