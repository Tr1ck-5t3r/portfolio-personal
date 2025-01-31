// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import playformCompress from '@playform/compress';
import compressor from 'astro-compressor';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
    site: 'https://effective-spoon-gw4xr65xvqjfvjq4.github.dev/',
    integrations: [mdx(), sitemap(), playformCompress(), compressor({ gzip: true, brotli: false }), solidJs()],
});