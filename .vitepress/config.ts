import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

const CURRENT_VERSION = '0.48.0-beta.22'

const Guide: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Warum Slidev',
    link: '/guide/why',
  },
  {
    text: 'Erste Schritte',
    link: '/guide/',
  },
  {
    text: 'Installation',
    link: '/guide/install',
  },
  {
    text: 'Markdown Syntax',
    link: '/guide/syntax',
  },
  {
    text: 'Navigation',
    link: '/guide/navigation',
  },
  {
    text: 'Animationen',
    link: '/guide/animations',
  },
  {
    text: 'Exportieren',
    link: '/guide/exporting',
  },
  {
    text: 'Statisches Hosting',
    link: '/guide/hosting',
  },
  {
    text: 'Präsentation aufzeichnen',
    link: '/guide/recording',
  },
  {
    text: 'Moderatoren Modus',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Zeichnungen & Anmerkungen',
    link: '/guide/drawing',
  },
  {
    text: 'Editor Integrationen',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const BuiltIn: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Theme: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Theme benutzen',
    link: '/themes/use',
  },
  {
    text: 'Themen Gallerie',
    link: '/themes/gallery',
  },
  {
    text: 'Theme erstellen',
    link: '/themes/write-a-theme',
  },
]

const Addon: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Addon benutzen',
    link: '/addons/use',
  },
  {
    text: 'Addon erstellen',
    link: '/addons/write-an-addon',
  },
]

<<<<<<< HEAD:.vitepress/config.js
const Translations = [
  {
    text: 'Deutsch',
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
  },
]

const Customizations = [
=======
const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2:.vitepress/config.ts
  {
    text: 'Individualisierung',
    link: '/custom/',
  },
  {
    text: 'Ordner Struktur',
    link: '/custom/directory-structure',
  },
  {
    text: 'Schriftarten',
    link: '/custom/fonts',
  },
  {
    text: 'Highlighters',
    link: '/custom/highlighters',
  },
  {
    text: 'Vue konfigurieren',
    link: '/custom/config-vue',
  },
  {
    text: 'Vite konfigurieren',
    link: '/custom/config-vite',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Windi CSS konfigurieren',
    link: '/custom/config-windicss',
=======
    text: 'Configure UnoCSS',
    link: '/custom/config-unocss',
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2:.vitepress/config.ts
  },
  {
    text: 'Monaco konfigurieren',
    link: '/custom/config-monaco',
  },
  {
    text: 'KaTeX konfigurieren',
    link: '/custom/config-katex',
  },
  {
    text: 'Mermaid konfigurieren',
    link: '/custom/config-mermaid',
  },
  {
    text: 'Parser konfigurieren',
    link: '/custom/config-parser',
  },
  {
    text: 'Shortcuts konfigurieren',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue Globaler Kontext',
    link: '/custom/vue-context',
  },
  {
    text: 'Globale Ebenen',
    link: '/custom/global-layers',
  },
]

const Resources: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Beispielprojekte',
    link: '/showcases',
  },
  {
    text: 'Lernressourcen',
    link: '/resources/learning',
  },
  {
    text: 'Gesammelte Titelbilder',
    link: '/resources/covers',
  },
]

const slidebars: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guide',
    items: Guide,
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Themen',
    children: Theme,
=======
    text: 'Themes',
    items: Theme,
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2:.vitepress/config.ts
  },
  {
    text: 'Addons',
    items: Addon,
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Individualisierung',
    children: Customizations,
  },
  {
    text: 'Built-in',
    children: [
      {
        text: 'Komponenten',
        link: '/builtin/components',
      },
      {
        text: 'Layouts',
        link: '/builtin/layouts',
      },
    ],
=======
    text: 'Customizations',
    items: Customizations,
  },
  {
    text: 'Built-in',
    items: BuiltIn,
  },
  {
    text: 'Resources',
    items: Resources,
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2:.vitepress/config.ts
  },
]

export default defineConfig({
  title: 'Slidev',
  description: 'Präsentationsfolien für Entwickler',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Präsentationsfolien für Entwickler' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        'html',
        'xml',
        'vue',
        'markdown',
      )
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
<<<<<<< HEAD:.vitepress/config.js
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Schlage Verbesserungen an dieser Seite vor',

    algolia: {
      appId: 'LCBV6MIFS6',
      apiKey: '1ff173fe73b20edc962c1c24c0b1c160',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:de']
      }
=======
    editLink: {
      pattern: 'https://github.com/slidevjs/docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'local',
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2:.vitepress/config.ts
    },

    nav: [
      {
        text: 'Guide',
        items: Guide,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Thema',
        items: Theme,
      },
      {
        text: 'Addon',
        items: Addon,
      },
      {
        text: 'Individualisieren',
        items: Customizations,
=======
        text: 'Theme',
        items: [
          ...Theme,
          {
            text: 'Built-in',
            items: BuiltIn,
          },
        ],
      },
      {
        text: 'Customize',
        items: [
          ...Customizations,
          {
            text: 'Addon',
            items: Addon,
          },
        ],
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2:.vitepress/config.ts
      },
      {
        text: 'Ressourcen',
        items: Resources,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Deutsch',
        items: Translations,
=======
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2:.vitepress/config.ts
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: 'English',
    },
    zh: {
      label: '简体中文',
      link: 'https://cn.sli.dev/',
    },
    fr: {
      label: 'Français',
      link: 'https://fr.sli.dev/',
    },
    es: {
      label: 'Español',
      link: 'https://es.sli.dev/',
    },
    ru: {
      label: 'Русский',
      link: 'https://ru.sli.dev/',
    },
    vn: {
      label: 'Việt Nam',
      link: 'https://vn.sli.dev/',
    },
    de: {
      label: 'Deutsch',
      link: 'https://de.sli.dev/',
    },
    br: {
      label: 'Português (BR)',
      link: 'https://br.sli.dev/',
    },
    el: {
      label: 'Ελληνικά',
      link: 'https://el.sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
