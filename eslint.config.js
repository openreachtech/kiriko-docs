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
  },

  // For `.vue` files
  ...pluginVue.configs['flat/base'],
  {
    files: [
      GLOB_VUE,
    ],
  }
]
