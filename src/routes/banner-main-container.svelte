<div>
  <slot />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 160px);
    display: flex;
    flex-direction: column;
    padding-bottom: var(--content-gap-to-footer);
  }
</style>
