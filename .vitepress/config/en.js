import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  lang: 'en-US',
  title: 'Kiriko',
  description: 'Documentations for Kiriko',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'kiriko.wtf',
        link: 'https://kiriko.wtf',
      },
    ],
    sidebar: [
      {
        text: 'Kiriko Protocol',
        items: [
          {
            text: 'Welcome',
            link: '/',
          },
          {
            text: 'Background',
            link: '/background',
          },
          {
            text: 'Core Concept',
            link: '/concept',
          },
          {
            text: 'Features',
            link: '/feature',
          },
          {
            text: 'Use Cases',
            link: '/usecase',
          },
          {
            text: 'Future Work',
            link: '/future-work',
          },
          {
            text: 'FAQ',
            link: '/faq',
          },
          {
            text: 'Glossary',
            link: '/glossary',
          },
        ],
      },
    ],
  },
})
