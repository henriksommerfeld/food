<script lang="ts">
  import type { Ingredient } from '$lib/types'
  import { formattedQuantity, getQuantity } from '../ingredients-calculations'

  export let ingredient: Ingredient
  export let defaultServings: number
  export let servings: number

  $: calculatedIngredient = getQuantity(ingredient, defaultServings, servings)
  $: formattedIngredient = formattedQuantity(calculatedIngredient)
</script>

{#if formattedIngredient}
  <li>{formattedIngredient}</li>
{/if}

<style>
  li {
    list-style: none;
    padding-left: 0;
    align-items: baseline;
    margin-bottom: calc(1.16rem / 2);
  }
  li::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: var(--teal400);
    border-radius: 100%;
    margin-right: var(--spacing-half);
  }
</style>
