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
			sidebar: [
				{
					label: 'About',
					items: [
						{ label: 'Me', slug: 'about/me' },
					],
				},
			],
			plugins: [
				starlightThemeBlack({
					navLinks: [{
						label: 'About me',
						link: '/about/me',
					}],
					footerText: 'From Coruña to the world'
				})
			],
		}),
	],
});
