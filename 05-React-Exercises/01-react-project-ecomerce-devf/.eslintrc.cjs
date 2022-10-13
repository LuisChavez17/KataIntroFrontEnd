module.exports = {
	'globals': {
		'angular': false,
		'module': false,
		'inject': false,
		'document': false
	},
	'env': {
		'browser': true,
		'amd': true,
		'node': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parser': 'babel-eslint',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'parser': '@babel/eslint-parser',
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true,
			'experimentalObjectRestSpread': true
		}
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react/prop-types': [
			'off'
		]
	}
};
