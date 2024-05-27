<script lang="ts">
  export let src: string
  export let srcset: string
  export let width: number
  export let height: number
  export let lqip: string
  export let alt: string
</script>

<img
  {src}
  {srcset}
  {width}
  {height}
  {alt}
  style="background: url({lqip}) no-repeat center/cover;"
  loading="lazy"
  decoding="async"
/>
