module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:@typescript-eslint/recommended"
	],
	plugins: [
		"@typescript-eslint",
		"import"
	],
	parserOptions: {
		"ecmaVersion": 2020,
		"sourceType": "module",
		"project": "./tsconfig.json"
	},
	rules: {
		"import/no-extraneous-dependencies": ["error", { "devDependencies": false, "optionalDependencies": false, "peerDependencies": false }],
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-duplicate-imports": "error",
		"@typescript-eslint/no-extra-semi": "off",
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/member-delimiter-style": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/consistent-type-imports": ["error", { "prefer": "type-imports" }],
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				"overrides": {
					"properties": "off",
					"parameterProperties": "off"
				}
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
		"valid-jsdoc": [
			2,
			{
				"requireReturn": false,
				"requireReturnType": false,
				"requireParamType": false,
				"requireParamDescription": true
			}
		],
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
				"max": 500
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
			"tab"
		],
		"no-multi-spaces": "error",
		"no-shadow": "off",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-extra-semi": "error",
		"no-param-reassign": "error",
		"no-use-before-define": "off",
		"no-duplicate-case": "error",
		"no-fallthrough": "error",
		"curly": "error",
		"object-shorthand": "error",
		"prefer-arrow-callback": "error",
		"radix": "error",
		"class-methods-use-this": "error",
		"eqeqeq": "error"
	}
}
