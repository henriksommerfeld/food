<script lang="ts">
  import BannerHeader from '../../banner-header.svelte'
  import BannerMainContainer from '../../banner-main-container.svelte'
  import ImageBanner from '../../image-banner.svelte'
  import PageWrapper from '../../page-wrapper.svelte'
  import Searchbox from '../../searchbox.svelte'
  import TagBackground from '../../tag-background.svelte'
  import TagPageSection from '../../tag-page-section.svelte'
  import type { PageData } from './$types'
  import DocumentSvg from '/src/assets/document-grey500.svg'
  import TagSvg from '/src/assets/tag-grey500.svg'

  export let data: PageData
  const { tag, recipes } = data
</script>

<svelte:head>
  <title>{tag.name}</title>
</svelte:head>

<PageWrapper>
  <TagBackground>
    <BannerMainContainer>
      <ImageBanner imagePath="/src/uploads/startpage-banner.jpg">
        <BannerHeader>
          <h1>#{tag.name}</h1>
          <h2>{tag.count} recept</h2>
        </BannerHeader>
        <Searchbox />
      </ImageBanner>
      <TagPageSection>
        {#each recipes as recipe}
          <li>
            <img src={DocumentSvg} alt="document icon" />
            <a href="/{recipe.slug}">{recipe.title}</a>
          </li>
        {/each}
        <div class="all-tags-container">
          <img src={TagSvg} alt="tag icon" />
          <a href="/taggar">Alla taggar</a>
        </div>
      </TagPageSection>
    </BannerMainContainer>
  </TagBackground>
</PageWrapper>

<style>
  li {
    display: flex;
    align-items: center;
    margin-bottom: calc(1.16rem / 2);
  }
  img {
    margin: 0 0.5em 0 0;
    min-width: 1rem;
  }
  .all-tags-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
  }
</style>
