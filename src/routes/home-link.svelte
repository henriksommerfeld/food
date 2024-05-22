<script lang="ts">
  import { page } from '$app/stores'
  $: isStartPage = $page.url.pathname === '/'
</script>

<a href="/" class:active={isStartPage} title="Till startsidan">
  <img src="/img/home-icon.svg" alt="Startsida" />
</a>

<style>
  a {
    position: absolute;
    width: var(--spacing-double);
    top: var(--spacing-default);
    left: var(--spacing-default);
  }
</style>
