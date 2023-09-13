/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	corePlugins: {
		fontSize: false,
	},
	theme: {
		screens: {
			'tablet': '496px', // Mobile-like for specific small tablet cases
			'desktop': '997px', // Docusaurus desktop breakpoint
		},
		fontFamily: {
			sans: ['neue-haas-grotesk-text', 'Arial', 'sans-serif'],
			display: ['neue-haas-grotesk-display', 'Arial', 'sans-serif'],
			mono: ['ibm-plex-mono', 'monospace'],
		},
		colors: {
			current: 'currentColor',
			transparent: 'transparent',
			black: '#111111',
			white: '#FFFFFF',
			infinum: '#D8262C',
			grey: {
				100: '#F5F9FF',
				200: '#E4EBF5',
				300: '#C4CEDE',
				400: '#929EB2',
				500: '#525E6C',
			},
			olive: {
				90: '#193528',
				70: '#2B5643',
				30: '#5A8772',
				10: '#9DBAAC',
			},
			sky: {
				90: '#262944',
				70: '#333A69',
				30: '#6479C3',
				10: '#A8B8E6',
			},
			violet: {
				90: '#3F253D',
				70: '#5C3B5E',
				30: '#916794',
				10: '#C2B6D3',
			},
			sand: {
				90: '#634B36',
				70: '#9E7956',
				30: '#D9A866',
				10: '#EACAA0',
			},
			candy: {
				90: '#5B1921',
				70: '#7A2935',
				30: '#D8555F',
				10: '#E2B5B5',
			},
			earth: {
				90: '#3D3D31',
				70: '#565240',
				30: '#7A7665',
				10: '#B1AFA3',
			}
		},
		extend: {
			spacing: {
				'gutter': '2.78vw',
				'side-padding': '5.56vw',
				'3.75': '0.9375rem',
				'7.5': '1.875rem',
				'full-plus-px': 'calc(100% + 1px)',
				'navbar': '6.25rem',
				'prose-mini': '15ch',
				'prose-half': '32ch',
				'prose-lg': '75ch',
			},
			maxWidth: {
				'prose-mini': '15ch',
				'prose-half': '32ch',
				'prose-lg': '75ch',
			},
			listStyleType: {
				'circle-fill': "'●'",
				'circle-hollow': "'○'",
				'square-fill': "'■'",
				'square-hollow': "'□'",
				'lower-roman': 'lower-roman',
				'upper-roman': 'upper-roman',
				'upper-alpha': 'upper-alpha',
				'lower-alpha': 'lower-alpha',
			},
			gridTemplateColumns: {
				fit20: 'repeat(auto-fit, minmax(20rem, 1fr))'
			},
		},
	},
	plugins: [
		require('tailwindcss-fluid-type')({
			values: {
				'12': [-3.25, {
					lineHeight: 1.33,
					letterSpacing: '0.0286em',
				}],
				'14': [-2, {
					lineHeight: 1.5,
					letterSpacing: '0.0142em',
				}],
				'16': [-1.125, 1.5],
				'18': [-0.5, 1.44],
				'24': [1.125, 1.25],
				'36': [3.35, {
					lineHeight: 1.17,
					letterSpacing: '-0.0138em',
				}],
				'h1': [10.125, {
					lineHeight: 0.98,
					letterSpacing: '-0.0208em',
				}],
				'h2': [7.8, {
					lineHeight: 1.02,
					letterSpacing: '-0.0125em',
				}],
				'h3': [5.425, {
					lineHeight: 1.12,
					letterSpacing: '-0.0096em',
				}],
			}
		}),
	],
}
