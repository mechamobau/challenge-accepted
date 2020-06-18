module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"airbnb-base",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["import", "simple-import-sort"],
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"@typescript-eslint/prefer-optional-chain": "error",

		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],

		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"class-methods-use-this": "off",
		"no-void": "off",
		"no-shadow": "off",
		"no-nested-ternary": "off",
		"no-underscore-dangle": "off",
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				"no-dupe-class-members": "off",
				"no-shadow": "off",
			},
		},
		{
			files: ["*.d.ts", "*.tsx"],
			rules: {
				"no-undef": "off",
			},
		},
	],
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".d.ts", ".tsx"],
			},
		},
	},
};
