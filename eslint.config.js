import pluginVue from 'eslint-plugin-vue'
import pluginStylistic from '@stylistic/eslint-plugin'

const jsGlobs = '**/*.{js,jsx,mjs,cjs}'
const vueGlobs = '**/*.vue'

export default [
  {
    files: [
      jsGlobs,
      vueGlobs,
    ],
    plugins: {
      '@stylistic': pluginStylistic,
    },
  },

  // For `.vue` files
  ...pluginVue.configs['flat/base'],
  {
    files: [
      vueGlobs,
    ],
  }
]
