import { defineConfig } from 'vitepress'


export const shared = defineConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/kiriko-logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Kiriko - Onchain Examination Protocol - Documentations ' }],
    ['meta', { property: 'og:site_name', content: 'Kiriko Documentations' }],
    ['meta', { property: 'og:image', content: 'https://docs.kiriko.wtf/kiriko-logo.svg' }],
    ['meta', { property: 'og:url', content: 'https://docs.kiriko.wtf/' }],
  ],

  themeConfig: {
    logo: {
      src: '/kiriko-logo.svg',
      width: 24,
      height: 24,
    },
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
    editLink: {
      pattern: 'https://github.com/openreachtech/kiriko-docs/blob/main/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
  },
})
