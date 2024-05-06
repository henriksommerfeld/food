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
  <div>
    {#each group.ingredients as ingredient}
      <Ingredient {ingredient} {defaultServings} {servings} />
    {/each}
  </div>
{/if}

<style>
  div {
    margin-left: 0;
  }
</style>
