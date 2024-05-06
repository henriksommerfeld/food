<script lang="ts">
  import { servingsUnitFormatted } from '$lib/servings'
  import type { RecipeFrontmatter } from '$lib/types'
  import IngredientsGroup from './ingredients-group.svelte'

  export let recipe: RecipeFrontmatter
  export let servings = recipe.servings
  const showIngredientsHeading = recipe.ingredients.ingredientsGroup.length > 1

  function decreaseServings() {
    if (servings < 2) return
    servings--
  }

  function increaseServings() {
    servings++
  }
</script>

<section>
  <h2>Ingredienser</h2>
  <div class="servings-adjuster">
    <button on:click={decreaseServings}>
      <img
        src={`/img/subtract.svg`}
        alt={`Minska antalet ${recipe.servingslabel} för beräkning av ingredienser`}
      />
    </button>
    {servings}
    {servingsUnitFormatted(servings, recipe.servingslabel)}
    <button on:click={increaseServings}>
      <img
        src={`/img/add.svg`}
        alt={`Öka antalet ${recipe.servingslabel} för beräkning av ingredienser`}
      />
    </button>
  </div>
  {#if servings !== recipe.servings}
    <div class="servings-adjuster-info">
      Justeringen av antal påverkar bara mängden ingredienser som visas i receptet. Tillagningstid
      och <em>Gör så här</em> är skrivna utifrån den ursprungliga mängden.
    </div>
  {/if}
  {#each recipe.ingredients.ingredientsGroup as ingredientsGroup}
    <IngredientsGroup
      group={ingredientsGroup}
      {showIngredientsHeading}
      defaultServings={recipe.servings}
      {servings}
    />
  {/each}
</section>

<style>
  section {
    margin-bottom: var(--spacing-section);
  }
  .servings-adjuster {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-default);
    border: 1px solid var(--teal500);
    background-color: var(--teal100);
    border-radius: 25px;
    padding: var(--spacing-half);
  }
  button {
    background: none;
    border: none;
    padding: 0;
    display: flex;
    cursor: pointer;
  }
  .servings-adjuster-info {
    padding: var(--spacing-default);
    margin-bottom: var(--spacing-default);
    background-color: var(--teal100);
    border: 1px solid var(--teal500);
    border-radius: var(--border-radius);
  }
</style>
