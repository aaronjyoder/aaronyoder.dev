// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://aaronyoder.dev',
	trailingSlash: 'never',
	scopedStyleStrategy: 'attribute',
	build: {
		format: 'file'
	},
	integrations: [sitemap()]
});