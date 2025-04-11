// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'juanoa',
			favicon: '/favicon.png',
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
			}]	,
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
				en: { label: 'English' },
			},
			plugins: [
				starlightThemeBlack({
					navLinks: [
            {
              label: 'About',
              link: '/about/me',
            },
            {
              label: 'Frontend Handbook',
							link: 'https://www.frontendhandbook.engineer',
              badge: 'new',
              attrs: {
                target: '_blank',
                rel: 'noopener',
              },
            },
          ],
					footerText: 'From Coruña to the world'
				})
			],
		}),
	],
});
