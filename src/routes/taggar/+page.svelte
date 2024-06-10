<script lang="ts">
  import BannerHeader from '../banner-header.svelte'
  import BannerMainContainer from '../banner-main-container.svelte'
  import ImageBanner from '../image-banner.svelte'
  import PageWrapper from '../page-wrapper.svelte'
  import Searchbox from '../searchbox.svelte'
  import TagBackground from '../tag-background.svelte'
  import TagPageSection from '../tag-page-section.svelte'
  import type { PageData } from './$types'
  import TagSvg from '/src/assets/tag-grey500.svg'

  export let data: PageData
  const tags = data.tags
</script>

<svelte:head>
  <title>Taggar</title>
</svelte:head>

<PageWrapper>
  <TagBackground>
    <BannerMainContainer>
      <ImageBanner imagePath="/src/uploads/startpage-banner.jpg">
        <BannerHeader>
          <h1>Taggar</h1>
        </BannerHeader>
        <Searchbox />
      </ImageBanner>
      <TagPageSection>
        {#each tags as tag}
          <li>
            <img src={TagSvg} alt="tag icon" />
            <a href="/taggar/{tag.slug}">{tag.name} ({tag.count})</a>
          </li>
        {/each}
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
</style>
