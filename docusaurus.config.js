// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '灰与幻想',
  tagline: '查看规则或特色功能',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Natsume-999.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/GreyFantasy-Wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Natsume-999', // Usually your GitHub org/user name.
  projectName: 'AttributeSuit-Wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/Natsume-999/GreyFantasy-Wiki/blob/main'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AttributeSuit',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '开始',
          },
          // 搜索框
          {
            type: 'search',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      // 底部链接
      footer: {
        style: 'dark',
        links: [
          {
            title: '加入我们',
            items: [
              {
                label: '主页',
                to: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=29PhAVtH_-OJB2oY4AQ2s5n58qFZHz1P&authKey=ak9fQYJXqEeFSklkTkNukxWsSkuL3JcgvJCrQ1oOs1K8JYsIIxqWcaKb3MAPQ2uF&noverify=0&group_code=319212109',
              },
            ],
          },
          {
            title: '提交建议',
            items: [
              {
                label: '企鹅号',
                href: 'https://jq.qq.com/?_wv=1027&k=QKurhX6E',
              },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright  ${new Date().getFullYear()} Natsume-999, All Rights Reserved.`,
      },
      // 深浅主题
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // 颜色随系统切换
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
  
    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          language: ["en", "zh"],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          indexBlog: false,
          docsRouteBasePath: "/"
        },
      ],
    ],
};

module.exports = config;
