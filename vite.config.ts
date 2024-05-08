import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { imagetools } from '@zerodevx/svelte-img/vite'

export default defineConfig({
  plugins: [sveltekit(), imagetools()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
})
