import pluginVue from 'eslint-plugin-vue'
import pluginStylistic from '@stylistic/eslint-plugin'

export default [
  {
    plugins: {
      '@stylistic': pluginStylistic,
    },
  },

  // For `.vue` files
  ...pluginVue.configs['flat/base'],
]
