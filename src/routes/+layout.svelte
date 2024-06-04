<script lang="ts">
  import '../app.css'
  import '../typography.css'

  const cssClass = 'keyboard-navigation'

  function keyDownHandler(evt: KeyboardEvent) {
    if ((evt && evt.key === 'Tab') || evt.key === 'Enter') {
      window.document.body.classList.add(cssClass)
    }
  }

  function clickHandler() {
    window.document.body.classList.remove(cssClass)
  }
</script>

<svelte:window on:keydown={keyDownHandler} on:click={clickHandler} />

<slot />
