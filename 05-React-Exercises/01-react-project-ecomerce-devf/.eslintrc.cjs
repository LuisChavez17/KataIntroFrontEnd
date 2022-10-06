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
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
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
