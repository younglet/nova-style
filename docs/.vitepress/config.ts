import { defineConfig } from 'vitepress'

// GitHub Pages project site uses /<repo>/ subpath; keep '/' for local dev.
const base = process.env.GITHUB_ACTIONS ? '/nova-style/' : '/'

export default defineConfig({
  repo: 'https://github.com/younglet/nova-style',
  base,
  title: 'Nova Style',
  description: 'IoT 原子 CSS 工具类。120 个 class · 12KB min · 给 ESP32 + MicroPython server 用 · 5 色语义（绿/红/黄/蓝/灰） · 内置暗色模式',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  // 跨仓库相对路径（如 ../../../nova-server/）在本地多仓库联调时有效，
  // 但在 CI 里没有该目录，会被判为死链。部署后链接仍可点击但目标不存在。
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'stylesheet', href: '/nova-style.min.css' }],
    ['meta', { name: 'theme-color', content: '#10b981' }]
  ],

  themeConfig: {
    siteTitle: 'Nova Style',

    nav: [
      { text: '指南', link: '/guide/what-is-nova-style', activeMatch: '/guide/' },
      { text: '工具类', link: '/utilities/display', activeMatch: '/utilities/' },
      { text: '案例', link: '/examples/01-static.html', activeMatch: '/examples/' },
      {
        text: '生态',
        items: [
          { text: 'novajs', link: 'https://younglet.github.io/novajs/' },
          { text: 'Nova Style', link: 'https://younglet.github.io/nova-style/' },
          { text: 'Nova UI', link: 'https://younglet.github.io/nova-ui/' },
          { text: 'NovaChart', link: 'https://younglet.github.io/nova-chart/' },
          { text: 'Nova Server', link: 'https://younglet.github.io/nova-server/' },
          { text: 'NovaMP 固件', link: 'https://younglet.github.io/novamp/' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '什么是 Nova Style', link: '/guide/what-is-nova-style' },
            { text: '安装', link: '/guide/installation' },
            { text: '设计原则', link: '/guide/design-principles' },
            { text: '暗色模式', link: '/guide/dark-mode' }
          ]
        }
      ],
      '/utilities/': [
        {
          text: '速查',
          items: [
            { text: '完整 class 索引', link: '/utilities/index' }
          ]
        },
        {
          text: '布局',
          items: [
            { text: 'Display', link: '/utilities/display' },
            { text: 'Flex', link: '/utilities/flex' },
            { text: 'Grid', link: '/utilities/grid' }
          ]
        },
        {
          text: '间距',
          items: [
            { text: 'Padding & Margin', link: '/utilities/spacing' }
          ]
        },
        {
          text: '尺寸',
          items: [
            { text: 'Width & Height', link: '/utilities/sizing' }
          ]
        },
        {
          text: '外观',
          items: [
            { text: 'Typography', link: '/utilities/typography' },
            { text: 'Colors', link: '/utilities/colors' },
            { text: 'Borders & Shadows', link: '/utilities/borders' }
          ]
        },
        {
          text: '交互',
          items: [
            { text: 'Cursor', link: '/utilities/cursor' },
            { text: 'Transitions & Hover', link: '/utilities/transitions' }
          ]
        },
        {
          text: '表单',
          items: [
            { text: 'Forms', link: '/utilities/forms' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '基础案例',
          items: [
            { text: '传感器卡片', link: '/examples/sensor-card' },
            { text: '开关按钮', link: '/examples/toggle-button' },
            { text: '仪表盘', link: '/examples/dashboard' },
            { text: '控制台', link: '/examples/control-panel' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/younglet/nova-style' }],

    footer: {
      message: '专为 NovaMP 2.0 设计 · powered by stemstar',
      copyright: ''
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本页内容'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },

  server: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: ['novajs.localhost', 'nova-style.localhost', 'nova-ui.localhost', 'nova-chart.localhost', 'localhost']
  }
})
