// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reflectis',
  tagline: 'Virtual Experience Platform',
  favicon: 'img/faviconR.ico',

  // Set the production url of your site here
  url: 'https://reflectis.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AnotheReality', // Usually your GitHub org/user name.
  projectName: 'Reflectis-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          lastVersion: 'current',
          versions: {
            current: {
                label: '2024.6',
                path: '2024.6',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
           // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /* @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/LOGO_REFLECTIS_White.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Reflectis Logo',
          src: 'img/LOGO_REFLECTIS_Black.png',
          srcDark: 'img/LOGO_REFLECTIS_White.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'reflectisSidebar',
            position: 'left',
            label: 'Reflectis',
          },
          {
            type: 'docSidebar',
            sidebarId: 'creatorkitSidebar',
            position: 'left',
            label: 'Creator Kit',
          },
          {
            type: 'docSidebar',
            sidebarId: 'boSidebar',
            position: 'left',
            label: 'Backoffice',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: false,
          },
          {
            href: 'https://github.com/AnotheRealitySrl/Reflectis-SDK-CreatorKit',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
          defaultMode: 'dark',
          disableSwitch: false,
          respectPrefersColorScheme: false,
       },
     /* footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AnotheReality, Inc. Built with Docusaurus.`,
      },*/
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
