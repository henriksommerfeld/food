<script lang="ts">
  import { tailwindColors } from '$lib/colors'
  import { transparentizeHex } from '$lib/color-conversions'

  export let instruction: string
  const toggle = () => (isChecked = !isChecked)
  $: isChecked = false
  // TODO: maybe replace without ts function transparentizeHex
  $: boxshadowColor = isChecked
    ? transparentizeHex(tailwindColors.teal500, 0.2)
    : transparentizeHex(tailwindColors.gray400, 0.3)
  $: focusCheckboxShadowColor = transparentizeHex(tailwindColors.teal400, 0.5)
</script>

<li class:checked={isChecked}>
  <label>
    <input type="checkbox" on:change={toggle} />
    <span
      style="--boxShadowColor: {boxshadowColor}; --focusBoxShadowColor: {focusCheckboxShadowColor} --checked: {isChecked}"
    />
  </label>
  {instruction}
</li>

<style>
  li {
    display: flex;
    align-items: top;
    padding: 0;
    margin-bottom: var(--spacing-default);
    transition: color 200ms ease-in-out;
    color: var(--black);
  }
  li.checked {
    color: var(--gray400);
  }
  input {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }
  input:focus + span {
    box-shadow: 0 0 3px 1px var(--focusBoxShadowColor);
    border-color: var(--teal500);
  }
  span {
    display: flex;
    position: relative;
    cursor: pointer;
    height: 1.4em;
    width: 1.4em;
    border-radius: 100%;
    margin-right: var(--spacing-half);
    border-width: 1px;
    border-style: solid;
    border-color: var(--gray500);
    background-color: var(--white);
    transition: background-color 300ms ease-in-out;
    box-shadow: 0 2px 2px var(--boxShadowColor);
  }
  li.checked span {
    border-color: var(--teal500);
    background-color: var(--teal100);
  }
  span::before {
    content: '';
    top: 5px;
    left: 4px;
    height: 0.5em;
    width: 0.8em;
    position: absolute;
    border-width: 0.15em;
    border-style: solid;
    border-color: transparent;
    border-right: 0;
    border-top: 0;
    transform: rotate(-50deg);
    transition: border-color 200ms ease-in-out;
  }
  li.checked span::before {
    border-color: var(--teal600);
  }
  span:hover {
    box-shadow: 0 0 3px 1px var(--focusBoxShadowColor);
    border-color: var(--teal500);
  }
</style>
