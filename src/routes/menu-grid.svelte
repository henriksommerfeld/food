<menu><slot /></menu>

<style>
  menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(25rem, 100%), 1fr));
    justify-content: center;
    margin: 0;
    grid-gap: 1rem;
    padding: 1rem;

    @media (min-width: 768px) {
      grid-gap: 2rem;
      padding: 2rem;
    }

    @media (min-width: 1400px) {
      grid-gap: 3rem;
      padding: 3rem;
    }
  }
</style>
