/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'test-col': '#32a852',
				'custom-green': '#0F2527',
				'custom-black': '#0B211F',
				'custom-gray': '#4A656C',
				'custom-white': '#DDDEE0',
			},
		},
	},
	plugins: [],
};
