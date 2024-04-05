import pluginVue from 'eslint-plugin-vue'
import pluginStylistic from '@stylistic/eslint-plugin'

const GLOB_JS = '**/*.{js,jsx,mjs,cjs}'
const GLOB_VUE = '**/*.vue'

export default [
  {
    files: [
      GLOB_JS,
      GLOB_VUE,
    ],
    plugins: {
      '@stylistic': pluginStylistic,
    },
    rules:{
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      '@stylistic/indent': [
        'error',
        2,
        {
          ignoredNodes: [],
          SwitchCase: 1, // 0
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: {
            parameters: 1,
            body: 1,
          },
          FunctionExpression: {
            parameters: 1,
            body: 1,
          },
          StaticBlock: {
            body: 1,
          },
          CallExpression: {
            arguments: 1,
          },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          offsetTernaryExpressions: false,
          ignoreComments: false,
        },
      ],
      '@stylistic/quotes': [
        'error',
        'single', // 'double'
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      '@stylistic/semi': [
        'error',
        'never', // 'always'
        {
          beforeStatementContinuationChars: 'never',
        },
      ],
    },
  },

  // For `.vue` files
  ...pluginVue.configs['flat/base'],
  {
    files: [
      GLOB_VUE,
    ],
    rules: {
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: {
            startTag: 0,
            endTag: 0,
            selfClosingTag: 0,
          },
          alignAttributesVertically: false, // true
          ignores: [],
        },
      ],
    },
  },
]
