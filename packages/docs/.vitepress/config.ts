import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/classroomjs/docs/',
	title: 'ClassroomJS',
	description: 'JavaScript library for classroom data management',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'API', link: '/api/' },
		],

		sidebar: [
			{
				text: 'Introduction',
				items: [
					{ text: 'What is ClassroomJS?', link: '/guide/' },
					{ text: 'Getting started', link: '/guide/getting-started' },
				],
			},
			{
				text: 'Usage',
				items: [
					{ text: 'Create an instance' },
					{ text: 'Add people' },
					{ text: 'Manage the registry' },
					{ text: 'Work with the registry' },
				],
			},
			{
				text: 'API documentation',
				items: [{ text: 'API', link: '/api/' }],
			},
		],

		outline: [2, 3],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/backtheportal/classroomjs' },
		],
	},
});
