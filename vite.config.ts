import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    sveltekit(),
    imagetools({
      cache: {
        enabled: true,
        dir: './node_modules/.cache/imagetools'
      }
    })
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
})
