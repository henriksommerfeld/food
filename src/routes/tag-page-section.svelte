<section>
  <menu>
    <slot />
  </menu>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    padding: 2rem 1rem;
    background: rgba(255, 255, 255, 0.7);
    height: 100%;
    width: 100%;
    min-height: calc(-100px + 100vh);
    @media (min-width: 768px) {
      background: none;
      height: auto;
      min-height: initial;
    }
  }
  menu {
    font-size: 1.1em;
    border-radius: 0.25rem;
    max-width: 1200px;
    @media (min-width: 768px) {
      border: 1px solid rgb(226, 232, 240);
      padding: 2rem;
      background: rgba(255, 255, 255, 0.7);
    }
  }
</style>
