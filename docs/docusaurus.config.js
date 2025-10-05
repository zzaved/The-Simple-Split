const config = {
  title: 'The Simple Split',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://zzaved.github.io',
  baseUrl: '/The-Simple-Split/',

  organizationName: 'Zzaved',
  projectName: 'The-Simple-Split',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  themes: ['@docusaurus/theme-mermaid'], // ✅ habilita Mermaid

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  themeConfig: ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The Simple Split',
        logo: {
          alt: 'The Simple Split',
          src: 'img/TSS.png', // ✅ corrigido (sem ../static)
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            href: 'https://github.com/Zzaved/The-Simple-Split',
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
            items: [{ label: 'Documentação', to: '/' }],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Simple Split.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
