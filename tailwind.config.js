/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#fc4a1a',
					secondary: '#f7b733',
					'base-100': '#ffffff'
				}
			}
		]
	}
};
