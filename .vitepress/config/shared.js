import { defineConfig } from 'vitepress'


export const shared = defineConfig({
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/openreachtech/kiriko-docs',
      },
    ],
    footer: {
      message: 'Built by the <a href="https://cryptolearningclub.org">Crypto Learning Club</a> Community.',
      copyright: '© 2024 Kiriko. ',
    },
  },
})
