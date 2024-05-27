<script lang="ts">
  import Footer from './footer.svelte'

  export let editLink = '/admin'
</script>

<div class="page">
  <div class="body">
    <slot />
  </div>
  <Footer {editLink} />
</div>

<style>
  .page {
    display: flex;
    height: 100%;
    min-height: 100vh;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--white);

    @media (min-width: 1024px) {
      background-color: var(--page-background);
    }

    background-repeat: repeat-x;
    background-attachment: fixed;
    background-position: top center;
    background-size: cover;
  }
  .body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
  }
</style>
