<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
  export const meta = data.meta
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={meta.title} />
</svelte:head>

<div class="page">
  <article>
    <h1>{meta.title}</h1>

    <div class="tags">
      {#if meta.tags.length > 0}
        <ul>
          {#each meta.tags as tag}
            <li>&num;{tag}</li>
          {/each}
        </ul>
      {/if}
    </div>

    <div class="prose">
      <svelte:component this={data.content} />
    </div>
  </article>
</div>
