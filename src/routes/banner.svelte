<script lang="ts">
  import HomeLink from './home-link.svelte'

  export let imagePath: string
  export let renderHomeLink = true
</script>

<div class="banner" style="--image: url({imagePath})">
  {#if renderHomeLink}
    <HomeLink />
  {/if}
  <div class="banner-dark-overlay">
    <div class="banner-width-constrainer">
      <slot />
    </div>
  </div>
</div>

<style>
  .banner {
    background-size: cover;
    background-position: center;
    position: relative;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.99;
  }
  .banner::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000;
    transition: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    background-image: var(--image);
    opacity: 1;
  }
  .banner-width-constrainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 14rem;
    max-width: var(--content-max-width);

    @media (min-width: 1024px) {
      min-height: 18rem;
      justify-content: center;
    }
  }
  .banner-dark-overlay {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    padding-top: 3rem;

    @media (min-width: 550px) {
      padding-top: initial;
    }
  }
</style>
