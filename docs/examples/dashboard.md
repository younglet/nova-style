# 实时仪表盘

把多个传感器卡片组合起来，加上顶部导航、设备列表，做一个完整的 IoT 仪表盘。

## 目标

一个能跑的真实仪表盘：4 个数据卡片 + 设备列表 + 模拟实时刷新。

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const t1 = ref('--')
const t2 = ref('--')
const t3 = ref('--')
const t4 = ref('--')
const time = ref('--:--:--')

let timer1, timer2

onMounted(() => {
  const upd = () => {
    t1.value = (22 + Math.random() * 6).toFixed(1)
    t2.value = (55 + Math.random() * 20).toFixed(0)
    t3.value = (30 + Math.random() * 15).toFixed(0)
    t4.value = (300 + Math.random() * 400).toFixed(0)
  }
  const tick = () => {
    const d = new Date()
    const pad = n => String(n).padStart(2, '0')
    time.value = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds())
  }
  upd(); tick()
  timer1 = setInterval(upd, 2000)
  timer2 = setInterval(tick, 1000)
})

onUnmounted(() => {
  clearInterval(timer1)
  clearInterval(timer2)
})
</script>

<div class="bg-gray-900 text-white p-3 rounded mb-3 flex justify-between items-center">
  <div class="font-bold text-sm">🌡️ 实验室环境监控</div>
  <div class="flex items-center gap-2 text-xs">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    <span>{{ time }}</span>
  </div>
</div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">空气温度</div>
    <div class="text-2xl font-bold mt-1">{{ t1 }}<span class="text-sm text-gray-500"> °C</span></div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">空气湿度</div>
    <div class="text-2xl font-bold mt-1 text-blue-500">{{ t2 }}<span class="text-sm text-gray-500"> %</span></div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">土壤湿度</div>
    <div class="text-2xl font-bold mt-1 text-yellow-500">{{ t3 }}<span class="text-sm text-gray-500"> %</span></div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">光照</div>
    <div class="text-2xl font-bold mt-1">{{ t4 }}<span class="text-sm text-gray-500"> lx</span></div>
  </div>
</div>

<div class="bg-white rounded-lg shadow">
  <div class="p-3 flex justify-between items-center border">
    <div class="flex items-center gap-2 text-sm"><span class="w-2 h-2 rounded-full bg-green-500"></span>主传感器</div>
    <span class="text-xs text-gray-500">运行中</span>
  </div>
  <div class="p-3 flex justify-between items-center border">
    <div class="flex items-center gap-2 text-sm"><span class="w-2 h-2 rounded-full bg-green-500"></span>温湿度计</div>
    <span class="text-xs text-gray-500">运行中</span>
  </div>
  <div class="p-3 flex justify-between items-center border">
    <div class="flex items-center gap-2 text-sm"><span class="w-2 h-2 rounded-full bg-yellow-500"></span>光照传感器</div>
    <span class="text-xs text-gray-500">信号弱</span>
  </div>
</div>

## HTML 完整代码

```html
<!-- 顶部导航 -->
<div class="bg-gray-800 text-white p-4 flex justify-between items-center">
  <div class="text-lg font-bold">🌡️ 实验室环境监控</div>
  <div class="flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    <span class="text-sm" id="time">--:--:--</span>
  </div>
</div>

<div class="p-4">
  <!-- 数据卡片 -->
  <div class="grid grid-cols-4 gap-3 mb-4">
    <div class="bg-white p-4 rounded-lg shadow text-center">
      <div class="text-xs text-gray-500">空气温度</div>
      <div class="text-2xl font-bold mt-1"><span id="t1">--</span><span class="text-sm text-gray-500"> °C</span></div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow text-center">
      <div class="text-xs text-gray-500">空气湿度</div>
      <div class="text-2xl font-bold mt-1 text-blue-500"><span id="t2">--</span><span class="text-sm text-gray-500"> %</span></div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow text-center">
      <div class="text-xs text-gray-500">土壤湿度</div>
      <div class="text-2xl font-bold mt-1 text-yellow-500"><span id="t3">--</span><span class="text-sm text-gray-500"> %</span></div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow text-center">
      <div class="text-xs text-gray-500">光照</div>
      <div class="text-2xl font-bold mt-1"><span id="t4">--</span><span class="text-sm text-gray-500"> lx</span></div>
    </div>
  </div>

  <!-- 设备列表 -->
  <div class="bg-white rounded-lg shadow">
    <div class="p-3 flex justify-between items-center border">
      <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-500"></span>主传感器</div>
      <span class="text-xs text-gray-500">运行中</span>
    </div>
    <div class="p-3 flex justify-between items-center border">
      <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-500"></span>温湿度计</div>
      <span class="text-xs text-gray-500">运行中</span>
    </div>
  </div>
</div>
```

## JS 完整代码

```js
// 模拟传感器数据
function update() {
  document.getElementById('t1').textContent = (22 + Math.random() * 6).toFixed(1)
  document.getElementById('t2').textContent = (55 + Math.random() * 20).toFixed(0)
  document.getElementById('t3').textContent = (30 + Math.random() * 15).toFixed(0)
  document.getElementById('t4').textContent = (300 + Math.random() * 400).toFixed(0)
}

// 时钟
function tick() {
  const d = new Date()
  const pad = n => String(n).padStart(2, '0')
  document.getElementById('time').textContent =
    pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds())
}

// 启动
update(); tick()
setInterval(update, 2000)   // 每 2 秒更新数据
setInterval(tick, 1000)    // 每 1 秒更新时间
```

## 讲解

### 1. 顶部导航

```html
<div class="bg-gray-800 text-white p-4 flex justify-between items-center">
  <div class="text-lg font-bold">🌡️ 实验室环境监控</div>
  <div class="flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    <span class="text-sm" id="time">--:--:--</span>
  </div>
</div>
```

- 用深色（`bg-gray-800`）做顶栏，跟下方浅色内容区形成层次
- `flex justify-between` 让标题和时间分列两端
- 状态点 + 时间是一个小组合

### 2. 卡片网格

`grid-cols-4` 让 4 个卡片等宽排列。`gap-3` 给卡片之间留 12px 间距。

### 3. 设备列表

每行一个设备，用 `border` 分割：

```html
<div class="bg-white rounded-lg shadow">
  <div class="p-3 flex justify-between items-center border">  <!-- 注意 border 不是 border-b -->
    ...
  </div>
  <div class="p-3 flex justify-between items-center border">
    ...
  </div>
</div>
```

如果你只想要下边框，把 `border` 改成 `border-b`。

### 4. 模拟数据

```js
setInterval(update, 2000)
```

每 2 秒调用 `update()`，里面用 `Math.random()` 模拟传感器数据。

**真硬件接入**：把 `Math.random()` 换成 `fetch('/api/sensors')` 就行，其他代码不用动。

## 练习

1. 把 `grid-cols-4` 改成 `grid-cols-2`，看响应式效果
2. 加一个"刷新"按钮，点击立即调用 `update()`（不依赖 setInterval）
3. 给异常数据加红色（如果温度 > 28，`text-red-500`）
4. 加一个"上次更新时间"在每张卡片底部

下一步 → [控制台](/examples/control-panel)
