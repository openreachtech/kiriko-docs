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
        text: 'Home',
        link: '/',
      },
      {
        text: 'What is Kiriko',
        link: 'ja/welcome',
      },
    ],
    sidebar: [
      {
        text: 'Kiriko Protocol',
        items: [
          {
            text: 'welcome',
            link: 'ja/welcome',
          },
          {
            text: 'background',
            link: 'ja/background',
          },
          {
            text: 'Core Concept',
            link: 'ja/concept',
          },
          {
            text: 'Features',
            link: '/ja/feature',
          },
          {
            text: 'Usercases',
            link: '/ja/usecase',
          },
          {
            text: 'Future Work',
            link: '/ja/future-work',
          },
          {
            text: 'FAQ',
            link: '/ja/faq',
          },
          {
            text: 'Glossary',
            link: '/ja/glossary',
          },
        ],
      },
    ],
  },
})
