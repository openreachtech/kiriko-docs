import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const ja = defineConfig({
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
        text: 'kiriko.wtfとは',
        link: '/ja/welcome',
      },
    ],
    sidebar: [
      {
        text: 'kiriko.wtf',
        items: [
          {
            text: 'ようこそ',
            link: '/ja/welcome',
          },
          {
            text: '背景',
            link: '/ja/background',
          },
          {
            text: '仕様',
            link: '/ja/concept',
          },
          {
            text: '特徴',
            link: '/ja/feature',
          },
          {
            text: 'ユースケース',
            link: '/ja/usecase',
          },
          {
            text: '展望',
            link: '/ja/future-work',
          },
          {
            text: 'FAQ',
            link: '/ja/faq',
          },
          {
            text: '用語集',
            link: '/ja/glossary',
          },
        ],
      },
    ],
  },
})
