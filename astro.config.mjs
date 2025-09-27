// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.juan.md',
	integrations: [starlight({
		title: 'juan.md',
		favicon: '/favicon.png',
		customCss: [
			'./src/styles/custom.css',
		],
		components: {
			// Override the default Pagination component with a minimalist version
			Pagination: './src/components/ui/Pagination.astro',
		},
		social: [
			{ icon: "github", label: "GitHub", href: "https://github.com/juanoa" },
			{ icon: "x.com", label: "X", href: "https://x.com/juanoa_" },
			{ icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/juanoa" }
		],
		defaultLocale: 'root',
		sidebar: [{
			label: 'Sobre mi',
			slug: "about",
		}, {
			label: 'Frontend Handbook',
			autogenerate: { directory: 'frontend' },
			collapsed: true,
		}, {
			label: 'Off-topic',
			autogenerate: { directory: 'off-topic' },
			collapsed: true,
		}, {
			label: 'Marcadores',
			autogenerate: { directory: 'marcadores' },
			collapsed: true,
		},
			"opinion",
		],
		locales: {
			root: {
				label: 'Español',
				lang: 'es',
			},
		},
	}), react()],
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
});