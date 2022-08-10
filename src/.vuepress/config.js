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
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指引',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/css/': [
        {
          title: '总览',
          collapsable: false,
          children: [
            '',
            'list',
            'styled-components'
          ]
        }
      ],
      '/js/': [
        {
          title: '总览',
          collapsable: false,
          children: [
            '',
            'vue'
          ]
        }
      ],
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
