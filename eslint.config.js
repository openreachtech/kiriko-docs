import pluginVue from 'eslint-plugin-vue'
import pluginStylistic from '@stylistic/eslint-plugin'

const GLOBS_JS = '**/*.{js,jsx,mjs,cjs}'
const GLOBS_VUE = '**/*.vue'

export default [
  {
    files: [
      GLOBS_JS,
      GLOBS_VUE,
    ],
    plugins: {
      '@stylistic': pluginStylistic,
    },
  },

  // For `.vue` files
  ...pluginVue.configs['flat/base'],
  {
    files: [
      GLOBS_VUE,
    ],
  }
]
