module.exports = {
	plugins: [
		"import",
		"jsdoc"
	],
	rules: {
		// off
		"padding-line-between-statements": "off",
		"no-use-before-define": "off",
		"no-shadow": "off",

		// error
		"class-methods-use-this": "error",
		"no-unused-expressions": "error",
		"prefer-arrow-callback": "error",
		"no-param-reassign": "error",
		"no-duplicate-case": "error",
		"no-unused-labels": "error",
		"object-shorthand": "error",
		"no-multi-spaces": "error",
		"no-fallthrough": "error",
		"no-extra-semi": "error",
		"eqeqeq": "error",
		"curly": "error",
		"radix": "error",
		"import/no-extraneous-dependencies": [
			"error",
			{
				"devDependencies": false,
				"optionalDependencies": false,
				"peerDependencies": false
			}
		],
		"jsdoc/require-param-type": 0,
		"jsdoc/require-param-description": 1,
		"jsdoc/require-returns-type": 0,
		"jsdoc/require-returns": 0,
		"prefer-destructuring": [
			"error",
			{
				"array": false,
				"object": true
			}
		],
		"max-lines": [
			"error",
			{
				"max": 150
			}
		],
		"max-params": [
			"error",
			3
		],
		"quotes": [
			"error",
			"single"
		],
		"spaced-comment": [
			"error",
			"always"
		],
		"semi": [
			"error",
			"always"
		],
		"import/order": [
			"error",
			{
				"newlines-between": "always-and-inside-groups",
				"groups": [
					"index",
					"sibling",
					"parent",
					"internal",
					"external",
					"builtin",
					"object",
					"type"
				]
			}
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
	},
	"overrides": [
		{
			parser: "@typescript-eslint/parser",
			extends: [
				"plugin:@typescript-eslint/recommended"
			],
			plugins: [
				"@typescript-eslint",
			],
			parserOptions: {
				"ecmaVersion": 2020,
				"sourceType": "module",
				"project": "./tsconfig.json"
			},
			files: ["*.ts", "*.tsx"],
			rules: {
				// off
				"@typescript-eslint/explicit-module-boundary-types": "off",
				"@typescript-eslint/explicit-function-return-type": "off",
				"@typescript-eslint/interface-name-prefix": "off",
				"@typescript-eslint/no-use-before-define": "off",
				"@typescript-eslint/no-extra-semi": "off",
				"indent": "off",

				// error
				"@typescript-eslint/switch-exhaustiveness-check": "error",
				"@typescript-eslint/member-delimiter-style": "error",
				"@typescript-eslint/no-non-null-assertion": "error",
				"@typescript-eslint/no-duplicate-imports": "error",
				"@typescript-eslint/member-ordering": "error",
				"@typescript-eslint/no-shadow": "error",
				"@typescript-eslint/indent": [
					"error",
					"tab",
					{
						"SwitchCase": 1
					}
				],
				"@typescript-eslint/consistent-type-imports": [
					"error",
					{
						"prefer": "type-imports"
					}
				],
				"@typescript-eslint/explicit-member-accessibility": [
					"error",
					{
						"overrides": {
							"properties": "off",
							"parameterProperties": "off"
						}
					}
				],
				"@typescript-eslint/padding-line-between-statements": [
					"error",
					{
						"blankLine": "always",
						"prev": "*",
						"next": [
							"return",
							"export",
							"block-like"
						]
					},
					{
						"blankLine": "always",
						"prev": "let",
						"next": "const"
					},
					{
						"blankLine": "always",
						"prev": "const",
						"next": "let"
					}
				],
				"@typescript-eslint/naming-convention": [
					"error",
					{
						"selector": "default",
						"format": [
							"PascalCase",
							"camelCase"
						]
					},
					// правило для булевых констант
					{
						"selector": "variable",
						"modifiers": [
							"const"
						],
						"types": [
							"boolean"
						],
						"format": [
							"PascalCase"
						],
						"prefix": [
							"is",
							"should",
							"has",
							"can",
							"did",
							"will"
						]
					},
					// правило для массивов
					{
						"selector": "variable",
						"types": [
							"array"
						],
						"format": [
							"camelCase"
						],
						"suffix": [
							"List"
						]
					},
					// правило для type
					{
						"selector": "typeAlias",
						"format": [
							"PascalCase"
						],
						"prefix": [
							"T"
						]
					},
					// правило для interface
					{
						"selector": "interface",
						"format": [
							"PascalCase"
						],
						"prefix": [
							"I"
						]
					},
					// правило для enum
					{
						"selector": "enum",
						"format": [
							"PascalCase"
						],
						"prefix": [
							"E"
						]
					},
					// правило для переменных класса
					{
						"selector": "classProperty",
						"format": [
							"camelCase"
						],
						"prefix": [
							"_"
						]
					}
				],
			}
		}
	]
}
