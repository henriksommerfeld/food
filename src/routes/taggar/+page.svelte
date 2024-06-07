<script lang="ts">
  import BannerHeader from '../banner-header.svelte'
  import BannerMainContainer from '../banner-main-container.svelte'
  import ImageBanner from '../image-banner.svelte'
  import PageWrapper from '../page-wrapper.svelte'
  import Searchbox from '../searchbox.svelte'
  import TagBackground from '../tag-background.svelte'
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
      <section>
        <menu>
          {#each tags as tag}
            <li>
              <img src={TagSvg} alt="tag icon" />
              <a href="/taggar/{tag.slug}">{tag.name} ({tag.count})</a>
            </li>
          {/each}
        </menu>
      </section>
    </BannerMainContainer>
  </TagBackground>
</PageWrapper>

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
