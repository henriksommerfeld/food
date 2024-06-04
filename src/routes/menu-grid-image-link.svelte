<script lang="ts">
  import Image from './image.svelte'
  import type { ImageType } from '$lib/image'

  export let href: string
  export let title: string
  export let titleColor: string
  export let image: ImageType
</script>

<li>
  <a {href}>
    <Image
      src={image.src}
      srcset={image.srcset}
      width={image.w}
      height={image.h}
      lqip={image.lqip}
      alt=""
    />
    <div class="title" style="--color: {titleColor}">
      {title}
    </div>
  </a>
</li>

<style>
  li {
    list-style: none;
    width: fit-content;
  }
  a {
    display: block;
    width: 100%;
    position: relative;
    transition: filter 150ms ease 0s, box-shadow 150ms ease 0s, font-size 150ms ease 0s;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
    text-align: center;
    overflow: hidden;
  }
  a:hover,
  a:focus {
    filter: brightness(1.1);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 10px;
  }
  ::global(.keyboard-navigation a:focus) {
    outline: var(--outline);
  }
  :global(a img) {
    transition: all 150ms ease 0s;
    margin-bottom: -5px;
  }
  :global(a:hover img, a:focus img) {
    transform: scale(1.05);
  }
  :global(a:hover .title, a:focus .title) {
    font-size: 1.1em;
  }
  .title {
    transition: font-size 100ms ease 0s;
    transform: translateY(-100%);
    position: absolute;
    width: 100%;
    padding: 1rem;
    color: black;
    background-color: rgba(255, 255, 255, 0.7);

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      backdrop-filter: blur(5px);
      background-color: transparent;
      color: var(--color);
    }
  }
</style>
