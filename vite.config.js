import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		'process.env': {},
	},
	build: {
		lib: {
			entry: resolve('src', 'components/index.js'),
			name: 'InfinumDocusaurusTheme',
			formats: ['es'],
			fileName: () => 'infinum-docusaurus-theme.js',
		},
		manifest: true,
		rollupOptions: {
			external: [...Object.keys(packageJson.peerDependencies)],
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'docusaurus-theme.css') {
						return 'style.css';
					}

					return assetInfo.name;
				},
			},
		},
	},
	watch: {
		exclude: 'node_modules/**',
	},
})
