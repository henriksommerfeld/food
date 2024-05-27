<script lang="ts">
  import EditSvg from '/src/assets/edit-filled.svg'

  export let editLink: string
</script>

<footer>
  <a href={editLink} target="_blank" rel="external noopener noreferrer" title="Redigera sidan">
    <img src={EditSvg} alt="Redigera sidan" />
    Redigera</a
  >
</footer>

<style>
  footer {
    display: grid;
    grid-row-gap: var(--spacing-double);
    padding: var(--spacing-default);
    background-color: var(--footer-background);
    color: var(--blue100);

    @media (min-width: 768px) {
      padding: var(--spacing-double);
    }
  }
  img {
    height: 1.3rem;
    margin-right: var(--spacing-half);
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
  }
  a:hover,
  a:focus,
  a:active,
  a:visited {
    background: none;
    color: var(--white);
  }
</style>
