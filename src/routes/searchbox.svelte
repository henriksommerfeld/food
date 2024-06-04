<script lang="ts">
  import { searchAgainstIndex } from '$lib/search'
  import type { RecipeSearchResult } from '$lib/search'
  import SearchForm from './search-form.svelte'
  import SearchDialog from './search-dialog.svelte'

  $: searchTerm = ''
  $: results = new Array<RecipeSearchResult>()
  let termForResults = ''
  let showDialog: () => Promise<void> | void

  const doSearch = async () => {
    results = await searchAgainstIndex(searchTerm)
    termForResults = searchTerm
  }
</script>

<SearchForm
  onSubmit={() => {
    showDialog()
    doSearch()
  }}
  bind:searchTerm
/>
<SearchDialog
  bind:show={showDialog}
  {results}
  bind:searchTerm
  bind:termForResults
  onSubmit={() => doSearch()}
/>
