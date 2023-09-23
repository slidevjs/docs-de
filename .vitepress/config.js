// @ts-check

const Guide = [
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

const Theme = [
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

const Addon = [
  {
    text: 'Addon benutzen',
    link: '/addons/use',
  },
  {
    text: 'Addon erstellen',
    link: '/addons/write-an-addon',
  },
]

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
<<<<<<< HEAD
    text: 'Windi CSS konfigurieren',
=======
    text: 'Configure UnoCSS',
    link: '/custom/config-unocss',
  },
  {
    text: 'Configure Windi CSS',
>>>>>>> 0c897047096b0c05c5b5d3c2a8c99912c5a33056
    link: '/custom/config-windicss',
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
  }
]

const BuiltIn = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Resources = [
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

const slidebars = [
  {
    text: 'Guide',
    children: Guide,
  },
  {
    text: 'Themen',
    children: Theme,
  },
  {
    text: 'Addons',
    children: Addon,
  },
  {
    text: 'Individualisierung',
    children: Customizations,
  },
  {
    text: 'Built-in',
<<<<<<< HEAD
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
    children: BuiltIn,
>>>>>>> 0c897047096b0c05c5b5d3c2a8c99912c5a33056
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
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
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
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
    },

    nav: [
      {
        text: 'Guide',
        items: Guide,
      },
      {
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
      },
      {
<<<<<<< HEAD
        text: 'Ressourcen',
=======
        text: 'Built-in',
        items: BuiltIn,
      },
      {
        text: 'Resources',
>>>>>>> 0c897047096b0c05c5b5d3c2a8c99912c5a33056
        items: Resources,
      },
      {
        text: 'Deutsch',
        items: Translations,
      },
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
  },
}
