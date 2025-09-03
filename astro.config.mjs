// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'juanoa',
		favicon: '/favicon.png',
		social: [
			{ icon: "github", label: "GitHub", href: "https://github.com/juanoa" },
			{ icon: "x.com", label: "X", href: "https://x.com/juanoa_" },
			{ icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/juanoa" }
		],
		defaultLocale: 'root',
		sidebar: [{
			label: 'Empieza aquí',
			autogenerate: { directory: 'empieza-aqui' },
		}, {
			label: 'About',
			autogenerate: { directory: 'about' },
		}, {
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