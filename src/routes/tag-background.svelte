<div class="icon-background">
  <slot />
</div>

<style>
  .icon-background {
    width: 100%;
    height: 100%;
    min-height: calc(-160px + 100vh);
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
    background-image: url('/src/assets/tag-bg.svg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50% 75%;
    background-size: 90%;
    @media (min-width: 768px) {
      background-color: var(--page-background);
      background-position-x: 20%;
      background-position-y: 60%;
      background-size: 40%;
    }
  }
</style>
