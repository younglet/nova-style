import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import SensorCard  from './components/SensorCard.vue'
import DeviceCard  from './components/DeviceCard.vue'
import ClassBox    from './components/ClassBox.vue'
import ColorPalette from './components/ColorPalette.vue'
import ClassGrid   from './components/ClassGrid.vue'
import Esp32Flasher from './components/Esp32Flasher.vue'

import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件，markdown 里可以直接用
    app.component('SensorCard',  SensorCard)
    app.component('DeviceCard',  DeviceCard)
    app.component('ClassBox',    ClassBox)
    app.component('ColorPalette',ColorPalette)
    app.component('ClassGrid',   ClassGrid)
    app.component('Esp32Flasher', Esp32Flasher)
  }
} satisfies Theme
