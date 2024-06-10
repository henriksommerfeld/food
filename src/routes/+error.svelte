<script>
  import { page } from '$app/stores'
  import * as config from '$lib/config'
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<h1>{$page.status}</h1>
<h2>{$page.error?.message}</h2>
