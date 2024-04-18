<script lang="ts">
  import '../app.css'
</script>

<div class="page">
  <slot />
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    background-color: white;
    width: 100%;
    padding-bottom: 5rem;

    @media (min-width: 1024px) {
      background-color: var(--gray100);
    }

    background-repeat: repeat-x;
    background-attachment: fixed;
    background-position: top center;
    background-size: cover;
  }
</style>
