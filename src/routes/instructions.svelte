<script lang="ts">
  import type { Recipe } from '$lib/types'
  import CheckableInstruction from './checkable-instruction.svelte'

  export let instructions: Recipe['instructions']
  const instructionsCount = instructions?.instructionsGroup?.length || 0
  const showHeading = instructionsCount > 1
</script>

{#if instructionsCount > 0}
  <section><h2>Gör så här</h2></section>
  {#each instructions.instructionsGroup as group}
    {#if showHeading}<h3>{group.name}</h3>{/if}
    <ol>
      {#each group.instructions as instruction}
        <CheckableInstruction {instruction} />
      {/each}
    </ol>
  {/each}
{/if}

<style>
  section {
    margin-bottom: var(--spacing-section);
  }
  ol {
    margin-left: 0;
  }
</style>
