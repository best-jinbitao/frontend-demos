const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Front end library',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '指引',
        link: '/guide/',
      },
      {
        text: 'Css',
        link: '/css/'
      },
      {
        text: 'Js',
        link: '/js/'
      },
      {
        text: 'nodejs',
        link: '/nodejs/'
      },
      {
        text: '有趣的项目',
        link: '/funny/'
      },
      {
        text: '框架',
        link: '/frame/'
      },

    ],
    sidebarDepth:3,
    sidebar: {
      '/guide/': [
        {
          title: '指引',
          collapsable: false,
          children: [
            '',
            '1-link',
          ]
        }
      ],
      '/css/': [
        {
          title: 'CSS库',
          collapsable: false,
          children: [
            '',
            '1-css-Preprocessor'
          ]
        }
      ],
      '/js/': [
        {
          title: 'JS库',
          collapsable: false,
          children: [
            '',
            '1-tool',
            '2-domJs',
            '3-frame',
            '4-file',
            '5-http',
            '6-anime',
            '7-computer',
            '8-image',
            '9-build',
            '10-compile',
            '11-color',
            '12-machine-learn',
            '13-lint',
            '14-test',
            '15-ast',
            '16-package',
            '17-video'
          ]
        }
      ],
      '/nodejs/': [
        {
          title: 'nodejs',
          collapsable: false,
          children: [
            '',
            '1-frame',
            '2-quick-web'
          ]
        }
      ],
      '/frame/': [
        {
          title: '框架',
          collapsable: false,
          children: [
            '',
            '1-vue',
            '2-react',
            '3-angular'
            
          ]
        }
      ],
      '/funny/':[
        ''
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
