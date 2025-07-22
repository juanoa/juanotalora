// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'Juan Otálora',
		favicon: '/favicon.png',
		social: {
			github: 'https://github.com/juanoa',
			'x.com': 'https://x.com/juanoa',
			linkedin: 'https://linkedin.com/in/juanoa'
		},
		defaultLocale: 'root',
		sidebar: [{
			label: 'Empieza aquí',
			autogenerate: { directory: 'empieza-aqui' },
		}, {
			label: 'About',
			autogenerate: { directory: 'about' },
		},{
			label: 'Frontend',
			autogenerate: { directory: 'frontend' },
		}, {
			label: 'Off-topic',
			autogenerate: { directory: 'off-topic' },
		}],
		locales: {
			root: {
				label: 'Español',
				lang: 'es',
			},
		},
	}), react()],
});