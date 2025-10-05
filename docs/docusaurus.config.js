// @ts-check
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Simple Split',
  tagline: 'Divida inteligente de despesas e gestão de micro-recebíveis',

  // 🌐 URL base do site (GitHub Pages)
  url: 'https://zzaved.github.io',
  baseUrl: '/The-Simple-Split/',

  // 🧭 Organização e projeto (devem refletir exatamente o nome do repositório)
  organizationName: 'zzaved',
  projectName: 'The-Simple-Split',

  // ⚙️ Tratamento de links e Markdown
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // 🧩 Suporte a Mermaid
  themes: ['@docusaurus/theme-mermaid'],

  // 🌍 Idiomas
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // 📦 Presets principais (Docs + Tema)
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Docs na raiz do site
          editUrl:
            'https://github.com/zzaved/The-Simple-Split/tree/main/docs/',
        },
        blog: false, // Blog desativado
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 🎨 Configuração do tema e layout
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The Simple Split',
        logo: {
          alt: 'The Simple Split Logo',
          src: 'img/TSS.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            href: 'https://github.com/zzaved/The-Simple-Split',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentação',
                to: '/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Simple Split. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
