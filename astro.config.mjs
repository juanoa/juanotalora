// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'juanoa',
			social: {
				github: 'https://github.com/juanoa',
				'x.com': 'https://x.com/juanoa',
				linkedin: 'https://linkedin.com/in/juanoa'
			},
			defaultLocale: 'root',
			sidebar: [{
				label: 'Empieza aquí',
				autogenerate: { directory: 'getting-started' },
			},{
				label: 'About',
				autogenerate: { directory: 'about' },
			},{
				label: 'Proyectos',
				autogenerate: { directory: 'projects' },
			},{
				label: 'Frontend handbook',
				autogenerate: { directory: 'frontend-handbook' },
			}],
			locales: {
				root: {
					label: 'Spanish',
					lang: 'es',
				},
			},
			plugins: [
				starlightThemeBlack({
					navLinks: [],
					footerText: 'From Coruña to the world'
				})
			],
		}),
	],
});
