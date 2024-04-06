<h1 align="center">
  Kiriko Documentation
</h1>

Documentation for Kiriko. Built with [VitePress](https://vitepress.dev/).

### Table of content

- 📚️ [Adding content](#adding-content)
- 💻️ [Local Development](#local-development)
- 🚀 [Deployment](#deployment)

---

## <a name="adding-content">📚️ Adding content</a>

This is a simple introduction for adding more content to this page. If you want to do something more advanced. Please see the official [Guide](https://vitepress.dev/guide/what-is-vitepress) and [Reference](https://vitepress.dev/reference/site-config).

### Site config

Take a quick look at `.vitepress/config.js` for a overall view. You can change site's title, description, sidebar members, navbar, social links, etc... within it.

### Pages

VitePress uses file-based routing. Given the following structure:

```
.
├─ guide
│  ├─ getting-started.md
│  └─ index.md
├─ index.md
└─ prologue.md
```

The generated HTML pages will be:

```
index.md                  -->  /index.html (accessible as /)
prologue.md               -->  /prologue.html
guide/index.md            -->  /guide/index.html (accessible as /guide/)
guide/getting-started.md  -->  /guide/getting-started.html
```

### Static assets

If you want to add something like an image, you can put it in the `/public` directory.

You should reference files placed in `/public` using root absolute path. For example, `public/icon.png` should always be referenced in source code as `/icon.png`.

### Frontmatter

Frontmatter data can be accessed via the special `$frontmatter` global variable. Here's an example of how you could use it in your Markdown file:

```
---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content
```

You can also access current page's frontmatter data in `<script setup>` with the `useData()` helper.

### I18n - Internationalization

It's better to read about it here: [Internationalization](https://vitepress.dev/guide/i18n)

## <a name="deployment">🚀 Deployment</a>

For more information. See 👉️ [The Official Documentation](https://vitepress.dev/guide/deploy)

### Clean URL

_Reference: [Generating Clean URL](https://vitepress.dev/guide/routing)_

By default, VitePress resolves inbound links to URLs ending with `.html`. However, some users may prefer "Clean URLs" without the `.html` extension - for example, `example.com/path` instead of `example.com/path.html`.

Some servers or hosting platforms provide this feature. If this feature is available to you, you can then also enable VitePress' own `cleanUrls` config option.

If not, you will have to manually resort to the following directory structure:

```
.
├─ getting-started
│  └─ index.md
├─ installation
│  └─ index.md
└─ index.md
```

## <a name="local-development">💻️ Local development</a>

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Project Setup

```sh
npm install
```

Compile and Hot-Reload for Development:

```sh
npm run docs:dev
```

Compile and Minify for Production:

```sh
npm run docs:build
```

Once built, preview it locally by running:

```sh
npm run docs:preview
```

Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
