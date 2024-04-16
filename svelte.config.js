import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md']
    }),
    vitePreprocess()
  ],

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  },

  onwarn: (warning, handler) => {
    // supress a11y warnings in markdown files
    if (warning.code.startsWith('a11y-') && warning.filename.endsWith('.md')) return
    handler(warning)
  }
}

export default config
