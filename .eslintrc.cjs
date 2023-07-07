module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	parserOptions: {
		ecmaVersion: 2020
	},
	extends: [
		'plugin:@infinum/core',
		'plugin:@infinum/react'
	],
	rules: {
		'max-len': 'off',
	},
}
