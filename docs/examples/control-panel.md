# 智能家居控制台

把所有东西组合起来：顶部导航 + 数据概览 + 设备控制 + 一键全开/全关 + 告警日志。

## 目标

完整的 IoT 控制台，5 个设备可独立控制，1 个一键全开/全关按钮。

<script setup>
import { ref, computed } from 'vue'

const devices = ref({
  light: { name: '客厅灯', icon: '💡', on: false, type: 'green' },
  ac:    { name: '空调',   icon: '❄️', on: false, type: 'blue'  },
  fan:   { name: '风扇',   icon: '🌀', on: false, type: 'blue'  },
  humid: { name: '加湿器', icon: '💧', on: false, type: 'blue'  },
  heat:  { name: '加热器', icon: '🔥', on: false, type: 'red'   }
})

function toggle(key, val) {
  devices.value[key].on = val
}

function allOn()  { Object.keys(devices.value).forEach(k => toggle(k, true))  }
function allOff() { Object.keys(devices.value).forEach(k => toggle(k, false)) }

const onCount = computed(() => Object.values(devices.value).filter(d => d.on).length)
</script>

<div class="bg-gray-800 text-white p-3 rounded mb-3 flex justify-between items-center text-sm">
  <div class="font-bold">🏠 智能家居</div>
  <div class="flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    <span>{{ onCount }} / 5 台开启</span>
  </div>
</div>

<div class="grid grid-cols-2 md:grid-cols-5 gap-2 mb-3">
  <div
    v-for="(d, key) in devices"
    :key="key"
    class="bg-white p-3 rounded-lg shadow"
  >
    <div class="flex justify-between items-center mb-2">
      <div class="text-sm font-bold">{{ d.icon }} {{ d.name }}</div>
      <span
        :class="d.on ? `bg-${d.type}-500` : 'bg-gray-300'"
        class="w-2 h-2 rounded-full"
      ></span>
    </div>
    <div class="flex gap-1">
      <button
        @click="toggle(key, true)"
        :class="d.on ? `bg-${d.type}-500 text-white` : 'bg-gray-100 text-gray-700'"
        class="flex-1 py-1 rounded text-xs cursor-pointer transition"
      >开</button>
      <button
        @click="toggle(key, false)"
        :class="!d.on ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700'"
        class="flex-1 py-1 rounded text-xs cursor-pointer transition"
      >关</button>
    </div>
  </div>
</div>

<div class="grid grid-cols-2 gap-2">
  <button @click="allOn"  class="py-2 rounded bg-green-500 text-white text-sm cursor-pointer">✅ 全部开启</button>
  <button @click="allOff" class="py-2 rounded bg-red-500 text-white text-sm cursor-pointer">🚫 全部关闭</button>
</div>

## HTML 完整代码

```html
<!-- 顶部 -->
<div class="bg-gray-800 text-white p-4 flex justify-between items-center">
  <div class="font-bold">🏠 智能家居</div>
  <div class="flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    <span class="text-sm" id="deviceCount">0 / 5 台开启</span>
  </div>
</div>

<div class="p-4">
  <!-- 设备网格 -->
  <div class="grid grid-cols-2 gap-3" id="devices">
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="flex justify-between items-center mb-3">
        <div class="font-bold">💡 客厅灯</div>
        <span id="led-light" class="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
      <div class="flex gap-2">
        <button onclick="toggle('light', true)"  class="flex-1 py-2 rounded bg-green-500 text-white text-sm">开</button>
        <button onclick="toggle('light', false)" class="flex-1 py-2 rounded bg-gray-200 text-gray-700 text-sm">关</button>
      </div>
    </div>
    <!-- ... 4 个类似设备 ... -->
  </div>

  <!-- 一键控制 -->
  <div class="grid grid-cols-2 gap-2 mt-3">
    <button onclick="allOn()"  class="py-2 rounded bg-green-500 text-white">✅ 全部开启</button>
    <button onclick="allOff()" class="py-2 rounded bg-red-500 text-white">🚫 全部关闭</button>
  </div>
</div>
```

## JS 完整代码

```js
// 设备状态
const state = {
  light: false,
  ac:    false,
  fan:   false,
  humid: false,
  heat:  false
}

// 设备的"ON 颜色"映射
const onColor = {
  light: 'bg-green-500',
  ac:    'bg-blue-500',
  fan:   'bg-blue-500',
  humid: 'bg-blue-500',
  heat:  'bg-red-500'
}

function toggle(key, on) {
  state[key] = on
  document.getElementById('led-' + key).className =
    'w-2 h-2 rounded-full ' + (on ? onColor[key] : 'bg-gray-300')
  updateCount()
}

function allOn()  { Object.keys(state).forEach(k => toggle(k, true))  }
function allOff() { Object.keys(state).forEach(k => toggle(k, false)) }

function updateCount() {
  const on = Object.values(state).filter(v => v).length
  document.getElementById('deviceCount').textContent = on + ' / 5 台开启'
}
```

## 讲解

### 1. 用一个对象管理所有设备

```js
const state = {
  light: false,
  ac:    false,
  fan:   false,
  humid: false,
  heat:  false
}
```

这是关键——**所有设备状态集中在一个对象里**。改的时候只改一个地方。

### 2. 用另一个对象存"ON 颜色"

```js
const onColor = {
  light: 'bg-green-500',  // 灯 ON 是绿色
  ac:    'bg-blue-500',   // 空调 ON 是蓝色
  heat:  'bg-red-500'     // 加热器 ON 是红色（发热嘛）
}
```

颜色服务于语义，**暖通类设备用蓝/红色，跟温度直觉一致**。

### 3. 通用 toggle 函数

```js
function toggle(key, on) {
  state[key] = on
  document.getElementById('led-' + key).className =
    'w-2 h-2 rounded-full ' + (on ? onColor[key] : 'bg-gray-300')
  updateCount()
}
```

一个函数处理所有设备——**加新设备时只要往 `state` 和 `onColor` 加一项**。

### 4. 一键全开/全关

```js
function allOn()  { Object.keys(state).forEach(k => toggle(k, true))  }
function allOff() { Object.keys(state).forEach(k => toggle(k, false)) }
```

`Object.keys(state)` 拿到所有键名，循环调用 `toggle`。

## 完整案例

这个案例的完整版在仓库的 `08-iot-monitor.html`，比这里还多了：

- 实时传感器数据（温度/湿度/光照/土壤）
- 告警日志区
- 实时时钟

**建议学生做完这个案例后，自己改造成真实项目**（鱼缸、植物、课室...）。

## 练习

1. 加一个"切换"按钮，单个设备只需 1 个按钮就能切状态
2. 加一个搜索/筛选（用 `hidden` class 配合 JS）
3. 把状态保存到 localStorage，刷新页面后保留
4. 接入真实硬件：用 `fetch('/api/device/light')` 替代本地 state

---

## 完整案例列表

- [传感器卡片](/examples/sensor-card)
- [开关按钮](/examples/toggle-button)
- [仪表盘](/examples/dashboard)
- 控制台（当前页）
