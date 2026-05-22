import { defineConfig } from 'astro/config'
import github from '@astrojs/github-pages'

export default defineConfig({
  site: 'https://reentika.github.io',
  integrations: [github()]
})