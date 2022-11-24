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
    text: 'Thema benutzen',
    link: '/themes/use',
  },
  {
    text: 'Themen Gallerie',
    link: '/themes/gallery',
  },
  {
    text: 'Thema erstellen',
    link: '/themes/write-a-theme',
  },
]

const Addon = [
  {
    text: 'Use Addon',
    link: '/addons/use',
  },
  {
    text: 'Write an Addon',
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
    text: 'Windi CSS konfigurieren',
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
<<<<<<< HEAD
    text: 'Shortcuts konfigurieren',
=======
    text: 'Configure Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Configure Shortcuts',
>>>>>>> 35a71a169226ed1a0aecd46caa63ecf4e468608c
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue Globaler Kontext',
    link: '/custom/vue-context',
  },
  {
    text: 'Globale Ebnen',
    link: '/custom/global-layers',
  }
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
<<<<<<< HEAD
    text: 'Individualisierung',
=======
    text: 'Addons',
    children: Addon,
  },
  {
    text: 'Customizations',
>>>>>>> 35a71a169226ed1a0aecd46caa63ecf4e468608c
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
<<<<<<< HEAD
        text: 'Individualisieren',
=======
        text: 'Addon',
        items: Addon,
      },
      {
        text: 'Customize',
>>>>>>> 35a71a169226ed1a0aecd46caa63ecf4e468608c
        items: Customizations,
      },
      {
        text: 'Ressourcen',
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
