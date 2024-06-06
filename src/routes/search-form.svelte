<script lang="ts">
  import SearchGreySvg from '/src/assets/search-grey100.svg'
  import SearchWhiteSvg from '/src/assets/search-white.svg'
  import { colors, tailwindColors } from '$lib/colors'
  import { transparentizeHex } from '$lib/color-conversions'

  export let onSubmit: () => Promise<void> | void
  export let searchTerm = ''
  $: hasFocus = false
  $: borderColor = hasFocus ? colors.white : tailwindColors.gray100
  $: backgroundColor = transparentizeHex(colors.white, hasFocus ? 0.7 : 0.6)
</script>

<search>
  <form
    class="searchbox"
    style="--border-color: {borderColor};--background-color: {backgroundColor}"
    on:submit={onSubmit}
  >
    <input
      type="search"
      aria-label="Ange dina sökord här..."
      placeholder="Ange dina sökord här..."
      on:focus={() => (hasFocus = true)}
      on:blur={() => (hasFocus = false)}
      bind:value={searchTerm}
    />
    <button type="submit">
      <img src={hasFocus ? SearchWhiteSvg : SearchGreySvg} alt="" aria-hidden />
    </button>
  </form>
</search>

<style>
  search {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: var(--content-max-width);
    padding: 1rem;
  }
  .searchbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    width: 100%;
    border-radius: 0.25rem;
    border-width: 2px;
    border-style: solid;
    border-color: var(--border-color);
    background-color: var(--background-color);

    @supports (backdrop-filter: none) {
      backdrop-filter: blur(10px);
    }
  }
  input:focus {
    outline: none;
  }
  :global(.keyboard-navigation) .searchbox:focus-within {
    outline: var(--outline);
  }
  button:focus {
    outline-offset: 4px;
    border-radius: 1px;
  }
  input {
    width: 100%;
    z-index: 1;
    background-color: transparent;
    border: none;
    caret-color: var(--teal700);
    color: var(--black);
    appearance: none;
    outline: none;
  }
  button {
    padding: 0;
    line-height: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  img {
    margin: 0;
    width: 1.5em;
  }
</style>
