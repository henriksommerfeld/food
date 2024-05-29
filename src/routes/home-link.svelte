<script lang="ts">
  import HomeIcon from '/src/assets/home-icon.svg'
  import { page } from '$app/stores'
  $: isStartPage = $page.url.pathname === '/'
</script>

<a href="/" class:active={isStartPage} title="Till startsidan">
  <img src={HomeIcon} alt="Startsida" />
</a>

<style>
  a {
    position: absolute;
    width: var(--spacing-double);
    top: var(--spacing-default);
    left: var(--spacing-default);
  }

  .active img {
    filter: grayscale(1);
  }
</style>
