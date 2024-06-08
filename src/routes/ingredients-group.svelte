<script lang="ts">
  import type { IngredientsGroup } from '$lib/types'
  import Ingredient from './ingredient.svelte'

  export let group: IngredientsGroup
  export let showIngredientsHeading: boolean
  export let defaultServings: number
  export let servings: number
</script>

{#if group.ingredients.length > 0}
  {#if showIngredientsHeading}
    <h4>{group.name}</h4>
  {/if}
  <ul>
    {#each group.ingredients as ingredient}
      <Ingredient {ingredient} {defaultServings} {servings} />
    {/each}
  </ul>
{/if}

<style>
  ul {
    margin-left: 0;
    margin-bottom: 2rem;
  }
</style>
